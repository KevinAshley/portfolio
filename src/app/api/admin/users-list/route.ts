import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getIdParamFromRequest, handleError } from "@/sharedComponents/nextApi";
import { createPasswordHash } from "@/sharedComponents/nextApi/authentication";
const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        // get users list
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                admin: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return NextResponse.json(users);
    } catch (error: unknown) {
        return handleError(error);
    }
}

export async function POST(req: Request) {
    try {
        // add user
        const data = await req.json();
        const { name, email, password, admin } = data;
        await prisma.user.create({
            data: {
                name,
                email,
                password: createPasswordHash(password),
                admin,
            },
        });
        return NextResponse.json({
            success: true,
        });
    } catch (error: unknown) {
        return handleError(error);
    }
}

export async function PATCH(req: Request) {
    try {
        // update user
        let data = await req.json();
        const id = getIdParamFromRequest(req);
        if (data.password) {
            data.password = createPasswordHash(data.password);
        } else {
            // never set an empty string
            delete data.password;
        }
        await prisma.user.update({
            where: {
                id,
            },
            data,
        });
        return NextResponse.json({
            success: true,
        });
    } catch (error: unknown) {
        return handleError(error);
    }
}

export async function DELETE(req: Request) {
    try {
        // delete users
        const data = await req.json();
        await prisma.user.deleteMany({
            where: {
                id: {
                    in: data.ids,
                },
            },
        });
        return NextResponse.json({
            success: true,
        });
    } catch (error: unknown) {
        return handleError(error);
    }
}
