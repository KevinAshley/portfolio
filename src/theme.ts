"use client";

import {
    experimental_extendTheme as extendTheme,
    createTheme,
} from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const baseTheme = createTheme();

const theme = extendTheme(baseTheme, {
    typography: {
        body1: {
            fontSize: "0.9rem",
            [baseTheme.breakpoints.up("md")]: {
                fontSize: "1rem",
            },
        },
        h1: {
            fontSize: "2.5rem",
            [baseTheme.breakpoints.up("md")]: {
                fontSize: "3rem",
            },
        },
        h2: {
            fontSize: "1.75rem",
            [baseTheme.breakpoints.up("md")]: {
                fontSize: "2rem",
            },
        },
        h3: {
            fontSize: "1.25rem",
            [baseTheme.breakpoints.up("md")]: {
                fontSize: "1.5rem",
            },
        },
        h4: {
            fontSize: "1.1rem",
            fontWeight: 500,
            [baseTheme.breakpoints.up("md")]: {
                fontSize: "1.2rem",
            },
        },
        caption: {
            fontSize: "0.7rem",
            [baseTheme.breakpoints.up("md")]: {
                fontSize: "0.75rem",
            },
        },
    },
    colorSchemes: {
        light: {
            palette: {
                background: {
                    // @ts-ignore
                    light: "#efefef",
                },
                // @ts-ignore
                border: "rgba(0,0,0,0.1)",
                backgroundOverlayGradient: "rgba(255,255,255,0.85)",
                backgroundOverlayTextShadow: "0px 0px 5px white",
                ribbon: "#efefef",
            },
        },
        dark: {
            palette: {
                background: {
                    // @ts-ignore
                    light: "#efefef",
                },
                // @ts-ignore
                border: "rgba(255,255,255,0.1)",
                backgroundOverlayGradient: "rgba(0,0,0,0.7)",
                backgroundOverlayTextShadow: "0px 0px 5px black",
                ribbon: grey["800"],
            },
        },
    },
});

export default theme;
