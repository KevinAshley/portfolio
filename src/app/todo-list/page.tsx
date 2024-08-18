"use client";

import { TableColumnIf } from "@/sharedComponents/dataTable";
import { FormValuesIf, InputIf } from "@/sharedComponents/form";
import Box from "@mui/material/Box";
import { apiFetchWrapper, ApiMethod } from "@/sharedComponents/nextApi";
import DataTableWithModals from "@/sharedComponents/dataTableWithModals";

const itemFormInputs: InputIf[] = [
    {
        type: "text",
        label: "Name",
        id: "name",
        required: true,
        autoComplete: "off",
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
    const getItems = () => {
        return apiFetchWrapper({
            method: ApiMethod.GET,
            uri: "/api/todo-list",
        });
    };

    const addItem = (formValues: FormValuesIf) => {
        return apiFetchWrapper({
            method: ApiMethod.PUT,
            uri: "/api/todo-list",
            body: formValues,
        });
    };

    const editItem = (formValues: FormValuesIf) => {
        return apiFetchWrapper({
            method: ApiMethod.POST,
            uri: "/api/todo-list",
            body: formValues,
        });
    };

    const deleteSelectedItems = (selectedIds: number[]) => {
        return apiFetchWrapper({
            method: ApiMethod.DELETE,
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
                tableColumns={tableColumns}
                deleteSelectedItems={deleteSelectedItems}
                addItem={addItem}
                editItem={editItem}
                itemFormInputs={itemFormInputs}
                getItems={getItems}
            />
        </Box>
    );
};

export default TodoList;
