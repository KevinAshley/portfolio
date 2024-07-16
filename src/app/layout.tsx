import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageWrapper from "@/components/pageWrapper";
import ThemeProvider from "@/components/themeProvider";

const inter = Inter({ subsets: ["latin"] });

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
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider>
                    <PageWrapper>{children}</PageWrapper>
                </ThemeProvider>
            </body>
        </html>
    );
}
