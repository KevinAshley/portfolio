"use client";

import { ColumnType, TableColumnIf } from "@/sharedComponents/dataTable";
import { FormValuesIf, InputIf } from "@/sharedComponents/form";
import { apiFetchWrapper, ApiMethod } from "@/sharedComponents/nextApi";
import DataTableWithModals from "@/sharedComponents/dataTableWithModals";

const itemFormInputs: InputIf[] = [
    {
        type: "text",
        label: "Name",
        id: "name",
        required: true,
    },
    {
        type: "checkbox",
        label: "Completed",
        id: "completed",
        required: false,
    },
];

const tableColumns: TableColumnIf[] = [
    {
        label: "Id",
        id: "id",
        type: ColumnType.TEXT,
    },
    {
        label: "Name",
        id: "name",
        type: ColumnType.TEXT,
    },
    {
        label: "Completed",
        id: "completed",
        type: ColumnType.BOOLEAN,
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

    const editItem = ({
        id,
        changedValues,
    }: {
        id: number;
        changedValues: FormValuesIf;
    }) => {
        return apiFetchWrapper({
            method: ApiMethod.POST,
            uri: `/api/todo-list?id=${id}`,
            body: changedValues,
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
    );
};

export default TodoList;
