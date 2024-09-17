import { ReactNode } from "react";
import { MainLayout } from "@/sharedComponents/mainLayout";
import theme from "../theme";

import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return <MainLayout theme={theme}>{children}</MainLayout>;
}
