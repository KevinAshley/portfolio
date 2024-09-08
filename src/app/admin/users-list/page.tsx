"use client";

import { ColumnType, TableColumnIf } from "@/sharedComponents/dataTable";
import { InputIf } from "@/sharedComponents/form";
import DataTableWithModals from "@/sharedComponents/dataTableWithModals";
import {
    getUsers,
    addUser,
    editUser,
    deleteUsers,
} from "@/app/lib/actions/usersList";

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
    return (
        <DataTableWithModals
            tableHeading={"Users List"}
            singularItemLabel={"User"}
            pluralItemsLabel={"Users"}
            tableColumns={tableColumns}
            deleteSelectedItems={deleteUsers}
            addItem={addUser}
            editItem={editUser}
            itemFormInputs={itemFormInputs}
            getItems={getUsers}
        />
    );
};

export default UsersList;
