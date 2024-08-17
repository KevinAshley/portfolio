import { ReactNode } from "react";
import type { Metadata } from "next";
import { RouteGroupIf } from "@/sharedComponents/navigator";
import { MainLayout } from "@/sharedComponents/mainLayout";
import theme from "../theme";
import { mainRoutes, portfolioRoutes } from "../routes";

export const metadata: Metadata = {
    title: "Kevin Ashley's Portfolio",
    description: "Kevin Ashley's full-stack web development portfolio",
};

const groupedRoutes: RouteGroupIf[] = [
    {
        routes: [...mainRoutes],
    },
    {
        routes: [...portfolioRoutes],
    },
];

const websiteName = "Kevin Ashley";

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <MainLayout
            theme={theme}
            groupedRoutes={groupedRoutes}
            websiteName={websiteName}
        >
            {children}
        </MainLayout>
    );
}
