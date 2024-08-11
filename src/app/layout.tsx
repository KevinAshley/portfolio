import type { Metadata } from "next";
import PageWrapper from "@/components/pageWrapper";
import ThemeProvider from "@/components/themeProvider";
import MainContextProvider from "@/contexts/mainContext";
import Toast from "@/components/toast";

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
                <ThemeProvider>
                    <MainContextProvider>
                        <PageWrapper>{children}</PageWrapper>
                        <Toast />
                    </MainContextProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
