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
        autoComplete: "off",
    },
    {
        type: "email",
        label: "Email",
        id: "email",
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
            method: ApiMethod.PUT,
            uri: "/api/admin/users-list",
            body: formValues,
        });
    };

    const editItem = (formValues: FormValuesIf) => {
        return apiFetchWrapper({
            method: ApiMethod.POST,
            uri: "/api/admin/users-list",
            body: formValues,
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
        <Box maxWidth="md" sx={{ margin: "auto", mt: 5 }}>
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
        </Box>
    );
};

export default UsersList;
