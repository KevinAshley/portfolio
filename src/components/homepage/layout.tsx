"use client";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const PaddedBox = styled(Box)({
    paddingTop: "5rem",
    paddingBottom: "5rem",
});

export const ResponsiveContainer = styled(Container)(({ theme }) => ({
    maxWidth: "md",
    [theme.breakpoints.up("lg")]: {
        maxWidth: "lg",
    },
}));
