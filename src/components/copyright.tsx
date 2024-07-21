"use client";
// client component so the date is always current
import Typography from "@mui/material/Typography";
import RoutedLink from "./routedLink";

export default function Copyright() {
    return (
        <Typography variant="body2" color="#fff" align="center">
            {"Copyright © "}
            <RoutedLink color="inherit" href="/">
                Kevin Ashley
            </RoutedLink>{" "}
            {new Date().getFullYear()}
        </Typography>
    );
}
