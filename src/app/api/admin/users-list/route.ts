import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { handleError } from "@/sharedComponents/nextApi";
const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return NextResponse.json(users);
    } catch (error: unknown) {
        return handleError(error);
    }
}

export async function PUT(req: Request) {
    try {
        const data = await req.json();
        const { name, email } = data;
        await prisma.user.create({
            data: {
                name,
                email,
            },
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
        const { id, name, email } = data;
        await prisma.user.update({
            where: {
                id,
            },
            data: {
                name,
                email,
            },
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
