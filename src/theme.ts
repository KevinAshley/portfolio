"use client";

import {
    experimental_extendTheme as extendTheme,
    createTheme,
    alpha,
    lighten,
} from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const baseTheme = createTheme({
    palette: {
        // @ts-ignore
        dark: "#2b2b2b",
    },
});

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
                backgroundOverlayGradientOne: "rgba(255, 189, 189, 0.5)",
                backgroundOverlayGradientTwo: "rgba(255,255,255,0.85)",
                backgroundOverlayTextShadow: "0px 0px 30px white",
                ribbon: "#efefef",
                subtleHighlight: lighten(baseTheme.palette.primary.main, 0.9),
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
                backgroundOverlayGradientOne: "rgba(0,0,0,0.7)",
                backgroundOverlayGradientTwo: "rgba(30,0,43,0.7)",
                backgroundOverlayTextShadow: "0px 0px 30px black",
                ribbon: grey["800"],
                subtleHighlight: alpha(baseTheme.palette.secondary.light, 0.05),
            },
        },
    },
});

export default theme;
