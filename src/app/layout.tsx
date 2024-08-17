import type { Metadata } from "next";
import PageWrapper from "@/components/pageWrapper";
import ThemeProvider from "@/sharedComponents/themeProvider";
import MainContextProvider from "@/sharedComponents/contexts/mainContext";
import Toast from "@/sharedComponents/toast";
import theme from "../theme";

export const metadata: Metadata = {
    title: "Kevin Ashley's Portfolio",
    description: "Kevin Ashley's full-stack web development portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body>
                <ThemeProvider theme={theme}>
                    <MainContextProvider>
                        <PageWrapper>{children}</PageWrapper>
                        <Toast />
                    </MainContextProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
