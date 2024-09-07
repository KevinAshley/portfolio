import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { handleError } from "@/sharedComponents/nextApi";
const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: "kashley3141@gmail.com",
            },
            select: {
                name: true,
                email: true,
            },
        });
        // if the sessionToken is not valid, clearCookie and return an error
        return NextResponse.json(user);
    } catch (error: unknown) {
        return handleError(error);
    }
}
