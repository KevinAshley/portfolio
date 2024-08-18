import { ReactNode } from "react";
import type { Metadata } from "next";
import { MainLayout } from "@/sharedComponents/mainLayout";
import theme from "../theme";
import { groupedRoutes } from "../routes";
import kevinGraySkyCropped from "@images/kevin-gray-sky-cropped.png";

export const metadata: Metadata = {
    title: "Kevin Ashley's Portfolio",
    description: "Kevin Ashley's full-stack web development portfolio",
};

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
            websiteAvatar={kevinGraySkyCropped}
        >
            {children}
        </MainLayout>
    );
}
