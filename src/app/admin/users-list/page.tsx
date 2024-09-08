"use client";

import { ColumnType, TableColumnIf } from "@/sharedComponents/dataTable";
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
    },
    {
        type: "email",
        label: "Email",
        id: "email",
        required: true,
    },
    {
        type: "text",
        label: "Password",
        id: "password",
        required: false,
    },
    {
        type: "checkbox",
        label: "Admin",
        id: "admin",
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
        label: "Email",
        id: "email",
        type: ColumnType.TEXT,
    },
    {
        label: "Admin",
        id: "admin",
        type: ColumnType.BOOLEAN,
    },
];

const UsersList = () => {
    const getItems = () => {
        return apiFetchWrapper({
            method: ApiMethod.GET,
            uri: "/api/admin/users-list",
        });
    };

    const addItem = (formValues: FormValuesIf) => {
        return apiFetchWrapper({
            method: ApiMethod.POST,
            uri: "/api/admin/users-list",
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
            method: ApiMethod.PATCH,
            uri: `/api/admin/users-list?id=${id}`,
            body: changedValues,
        });
    };

    const deleteSelectedItems = (selectedIds: number[]) => {
        return apiFetchWrapper({
            method: ApiMethod.DELETE,
            uri: "/api/admin/users-list",
            body: {
                ids: selectedIds,
            },
        });
    };

    return (
        <DataTableWithModals
            tableHeading={"Users List"}
            singularItemLabel={"User"}
            pluralItemsLabel={"Users"}
            tableColumns={tableColumns}
            deleteSelectedItems={deleteSelectedItems}
            addItem={addItem}
            editItem={editItem}
            itemFormInputs={itemFormInputs}
            getItems={getItems}
        />
    );
};

export default UsersList;
