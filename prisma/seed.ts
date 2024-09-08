import { createPasswordHash } from "../src/sharedComponents/nextApi/authentication";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    console.log("DB seed initialized");
    if (
        process.env.ADMIN_EMAIL &&
        process.env.ADMIN_NAME &&
        process.env.ADMIN_TEMP_PASSWORD
    ) {
        await prisma.user.create({
            data: {
                email: process.env.ADMIN_EMAIL,
                name: process.env.ADMIN_NAME,
                password: await createPasswordHash(
                    process.env.ADMIN_TEMP_PASSWORD
                ),
            },
        });
    } else {
        throw new Error("Required ENV variable is missing");
    }
}

main()
    .then(async () => {
        console.log("DB seed success");
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
