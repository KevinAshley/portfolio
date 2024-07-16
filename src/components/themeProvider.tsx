"use client";

import React, { ReactNode } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
    createTheme,
    ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const getTheme = (prefersDarkMode?: boolean) => {
    return createTheme({
        palette: {
            mode: prefersDarkMode ? "dark" : "light",
            primary: {
                light: "#63ccff",
                main: "#009be5",
                dark: "#006db3",
            },
        },
        typography: {
            h1: {
                fontSize: "2rem",
            },
            h5: {
                fontWeight: 500,
                fontSize: 26,
                letterSpacing: 0.5,
            },
        },
    });
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const theme = getTheme(prefersDarkMode);
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
