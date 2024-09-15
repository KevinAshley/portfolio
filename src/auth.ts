import NextAuth, { DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { createPasswordHash } from "@/sharedComponents/nextApi/authentication";
const prisma = new PrismaClient();

export const { auth, handlers, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({
                        email: z.string(),
                        password: z.string(),
                    })
                    .safeParse(credentials);
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await prisma.user.findUnique({
                        where: {
                            email,
                        },
                    });
                    if (user) {
                        const hashedPassword = createPasswordHash(password);
                        const passwordsMatch = hashedPassword == user.password;
                        if (passwordsMatch) {
                            return {
                                name: user.name,
                                email: user.email,
                                admin: user.admin,
                            };
                        }
                    }
                }
                return null;
            },
        }),
    ],
});
