import type { NextAuthConfig } from "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface User {
        // Add your additional properties here:
        admin: boolean;
    }
    interface Session extends DefaultSession {
        user: DefaultSession["user"] & {
            admin: boolean;
        };
    }
}

export const authConfig = {
    pages: {
        signIn: "/",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        authorized: async ({ auth, request: { nextUrl } }) => {
            const isLoggedIn = !!auth?.user;
            // THIS IS THE MIDDLEWARE
            // console.log("middleware", nextUrl.pathname);
            // console.log("HELLOOOOOOOO!!!! are we logged in???", auth?.user);
            // const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
            // if (isOnDashboard) {
            //     if (isLoggedIn) return true;
            //     return false; // Redirect unauthenticated users to login page
            // } else if (isLoggedIn) {
            //     return Response.redirect(new URL("/dashboard", nextUrl));
            // }
            if (nextUrl.pathname.startsWith("/admin/")) {
                if (!isLoggedIn) {
                    return false;
                } else {
                    if (!auth.user.admin) {
                        return false;
                    }
                }
            }
            return true;
        },
        jwt(jwtParams) {
            const { token, user } = jwtParams;
            if (user) {
                // this case only happends on login
                token.admin = user.admin;
            }
            return token;
        },
        session(sessionParams) {
            const { session, token } = sessionParams;
            session.user.admin = token.admin as boolean;
            return session;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
