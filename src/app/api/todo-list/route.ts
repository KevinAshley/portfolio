import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { handleError } from "@/app/api";
const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        const todoItems = await prisma.todoItem.findMany({
            select: {
                id: true,
                name: true,
                completed: true,
            },
        });
        return NextResponse.json(todoItems);
    } catch (error: unknown) {
        return handleError(error);
    }
}

export async function PUT(req: Request) {
    try {
        const data = await req.json();
        await prisma.todoItem.create({
            data,
        });
        return NextResponse.json({
            success: true,
        });
    } catch (error: unknown) {
        return handleError(error);
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { id, ...otherData } = data;
        await prisma.todoItem.update({
            where: {
                id,
            },
            data: otherData,
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
        const data = await req.json();
        await prisma.todoItem.deleteMany({
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
