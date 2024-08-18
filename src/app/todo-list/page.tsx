"use client";

import { TableColumnIf } from "@/sharedComponents/dataTable";
import { InputIf } from "@/sharedComponents/form";
import Box from "@mui/material/Box";
import { useCallback, useContext, useEffect, useState } from "react";
import { TodoItem } from "@prisma/client";
import { apiFetchWrapper } from "@/app/api";
import {
    MainContext,
    toastVariants,
} from "@/sharedComponents/contexts/mainContext";
import DataTableWithModals from "@/sharedComponents/dataTableWithModals";

const itemFormInputs: InputIf[] = [
    {
        type: "text",
        label: "Name",
        id: "name",
        required: true,
    },
];

const tableColumns: TableColumnIf[] = [
    {
        label: "Id",
        id: "id",
    },
    {
        label: "Name",
        id: "name",
    },
    {
        label: "Completed",
        id: "completed",
    },
];

const TodoList = () => {
    const [initialized, setInitialized] = useState(false);
    const [items, setItems] = useState<TodoItem[]>([]);

    const [editingId, setEditingId] = useState<number | undefined>(undefined);
    const [formValues, setFormValues] = useState<{
        [key: string]: string | number | boolean;
    }>({});
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const { setToast } = useContext(MainContext);

    const getTodoItems = useCallback(() => {
        apiFetchWrapper({
            method: "GET",
            uri: "/api/todo-list",
        })
            .then(setItems)
            .catch((err) => {
                setToast({
                    message: err.message,
                    variant: toastVariants.ERROR,
                });
            });
    }, [setToast]);

    useEffect(() => {
        if (!initialized) {
            getTodoItems();
            setInitialized(true);
        }
    }, [initialized, getTodoItems]);

    const addItem = () => {
        return apiFetchWrapper({
            method: "PUT",
            uri: "/api/todo-list",
            body: formValues,
        });
    };

    const editItem = () => {
        apiFetchWrapper({
            method: "POST",
            uri: "/api/todo-list",
            body: formValues,
        })
            .then(() => {
                setEditingId(undefined);
                getTodoItems();
                setToast({
                    message: "Successfully edited item!",
                    variant: toastVariants.SUCCESS,
                });
            })
            .catch((err) => {
                setToast({
                    message: err.message,
                    variant: toastVariants.ERROR,
                });
            });
    };

    const deleteSelectedItems = () => {
        apiFetchWrapper({
            method: "DELETE",
            uri: "/api/todo-list",
            body: {
                ids: selectedIds,
            },
        })
            .then(() => {
                getTodoItems();
                setToast({
                    message: "Successfully deleted items!",
                    variant: toastVariants.SUCCESS,
                });
                setSelectedIds([]);
            })
            .catch((err) => {
                setToast({
                    message: err.message,
                    variant: toastVariants.ERROR,
                });
            });
    };

    useEffect(() => {
        if (editingId) {
            setFormValues(items.find((item) => item.id == editingId) || {});
        } else {
            setFormValues({});
        }
    }, [items, editingId]);

    return (
        <Box maxWidth="md" sx={{ margin: "auto", mt: 5 }}>
            <DataTableWithModals
                tableHeading="To-Do List"
                singularItemLabel={"To-Do Item"}
                items={items}
                tableColumns={tableColumns}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
                deleteSelectedItems={deleteSelectedItems}
                editingId={editingId}
                setEditingId={setEditingId}
                addItem={addItem}
                editItem={editItem}
                itemFormInputs={itemFormInputs}
                formValues={formValues}
                setFormValues={setFormValues}
                reloadItems={getTodoItems}
            />
        </Box>
    );
};

export default TodoList;
