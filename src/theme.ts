"use client";
import { Roboto } from "next/font/google";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
// import { pink } from "@mui/material/colors";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const theme = extendTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
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
