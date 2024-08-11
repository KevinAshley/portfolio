"use client";

import DataTable, { TableColumnIf } from "@/components/dataTable";
import ModalForm from "@/components/modalForm";
import { InputIf } from "@/components/form";
import Box from "@mui/material/Box";
import { useCallback, useContext, useEffect, useState } from "react";
import { TodoItem } from "@prisma/client";
import { apiFetchWrapper } from "@/app/api";
import { MainContext, toastVariants } from "@/contexts/mainContext";

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
    const [addNew, setAddNew] = useState(false);
    const [newItemValues, setNewItemValues] = useState<{
        [key: string]: string;
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
        apiFetchWrapper({
            method: "PUT",
            uri: "/api/todo-list",
            body: newItemValues,
        })
            .then(() => {
                setAddNew(false);
                getTodoItems();
                setToast({
                    message: "Successfully added new item!",
                    variant: toastVariants.SUCCESS,
                });
                setNewItemValues({});
            })
            .catch((err) => {
                setToast({
                    message: err.message,
                    variant: toastVariants.ERROR,
                });
            });
    };

    const deleteSelectedItems = () => {
        // apiFetchWrapper({
        //     method: "POST",
        //     uri: "/api/delete_todo_items",
        //     body: {
        //         ids: selectedIds,
        //     },
        // })
        //     .then(() => {
        //         getTodoItems();
        //         setToast({
        //             message: "Successfully deleted items!",
        //             variant: toastVariants.SUCCESS,
        //         });
        //         setSelectedIds([]);
        //     })
        //     .catch((err) => {
        //         setToast({
        //             message: err.message,
        //             variant: toastVariants.ERROR,
        //         });
        //     });
    };

    return (
        <Box maxWidth="md" sx={{ margin: "auto", mt: 5 }}>
            <DataTable
                data={items}
                setAddNewOpen={setAddNew}
                title={"To-Do List"}
                selected={selectedIds}
                setSelected={setSelectedIds}
                deleteSelected={deleteSelectedItems}
                tableColumns={tableColumns}
                defaultOrderBy={"id"}
            />
            <ModalForm
                title={"Add New To-Do Item"}
                open={addNew}
                setOpen={setAddNew}
                handleSubmit={addItem}
                inputs={itemFormInputs}
                values={newItemValues}
                setValues={setNewItemValues}
            />
        </Box>
    );
};

export default TodoList;
