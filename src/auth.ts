import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { createPasswordHash } from "@/sharedComponents/nextApi/authentication";
const prisma = new PrismaClient();

export const { auth, signIn, signOut } = NextAuth({
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
                        const passwordsMatch =
                            (await createPasswordHash(password)) ==
                            user.password;
                        if (passwordsMatch) {
                            return {
                                name: user.name,
                                email: user.email,
                            };
                        }
                    }
                }
                return null;
            },
        }),
    ],
});
