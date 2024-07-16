"use client";

import React, {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
    createTheme,
    ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const getTheme = ({ darkMode }: { darkMode: boolean }) => {
    return createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
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

export type palleteModeType = "auto" | "dark" | "light";

interface ThemeContextProviderIf {
    darkMode: boolean;
    paletteMode: palleteModeType;
    setPaletteMode: Dispatch<SetStateAction<palleteModeType>>;
}

export const ThemeContext = createContext<ThemeContextProviderIf>({
    darkMode: false,
    paletteMode: "auto",
    setPaletteMode: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const [paletteMode, setPaletteMode] = useState<palleteModeType>("auto");

    const darkMode =
        paletteMode == "auto" ? prefersDarkMode : paletteMode == "dark";

    const theme = getTheme({
        darkMode,
    });

    const themeContextProviderValue: ThemeContextProviderIf = {
        darkMode,
        paletteMode,
        setPaletteMode,
    };

    return (
        <ThemeContext.Provider value={themeContextProviderValue}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
