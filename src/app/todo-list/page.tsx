"use client";

import { TableColumnIf } from "@/sharedComponents/dataTable";
import { FormValuesIf, InputIf } from "@/sharedComponents/form";
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

    const addItem = (formValues: FormValuesIf) => {
        return apiFetchWrapper({
            method: "PUT",
            uri: "/api/todo-list",
            body: formValues,
        });
    };

    const editItem = (formValues: FormValuesIf) => {
        return apiFetchWrapper({
            method: "POST",
            uri: "/api/todo-list",
            body: formValues,
        });
    };

    const deleteSelectedItems = (selectedIds: number[]) => {
        return apiFetchWrapper({
            method: "DELETE",
            uri: "/api/todo-list",
            body: {
                ids: selectedIds,
            },
        });
    };

    return (
        <Box maxWidth="md" sx={{ margin: "auto", mt: 5 }}>
            <DataTableWithModals
                tableHeading={"To-Do List"}
                singularItemLabel={"To-Do Item"}
                pluralItemsLabel={"To-Do Items"}
                items={items}
                tableColumns={tableColumns}
                deleteSelectedItems={deleteSelectedItems}
                addItem={addItem}
                editItem={editItem}
                itemFormInputs={itemFormInputs}
                loadItems={getTodoItems}
            />
        </Box>
    );
};

export default TodoList;
