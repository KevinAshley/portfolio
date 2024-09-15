import { ReactNode } from "react";
import { MainLayout } from "@/sharedComponents/mainLayout";
import theme from "../theme";
import kevinGraySkyCropped from "@images/kevin-gray-sky-cropped.png";

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <MainLayout theme={theme} websiteAvatar={kevinGraySkyCropped}>
            {children}
        </MainLayout>
    );
}
