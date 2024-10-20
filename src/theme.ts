"use client";

import {
    experimental_extendTheme as extendTheme,
    createTheme,
    alpha,
    lighten,
    responsiveFontSizes,
} from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const baseTheme = createTheme({
    palette: {
        // @ts-ignore
        dark: "#2b2b2b",
    },
});

const responsiveTheme = responsiveFontSizes(baseTheme);

const theme = extendTheme(responsiveTheme, {
    colorSchemes: {
        light: {
            palette: {
                background: {
                    // @ts-ignore
                    light: "#efefef",
                },
                // @ts-ignore
                border: "rgba(0,0,0,0.1)",
                backgroundOverlayGradientOne: "rgba(255,255,255,0.8)",
                backgroundOverlayGradientTwo: alpha(
                    lighten(baseTheme.palette.secondary.main, 0.95),
                    0.9
                ),
                backgroundOverlayTextShadow: "0px 0px 30px white",
                ribbon: "#efefef",
                subtleHighlight: alpha(baseTheme.palette.primary.light, 0.05),
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
