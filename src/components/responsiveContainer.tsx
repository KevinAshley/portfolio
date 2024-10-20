"use client";

import Container from "@mui/material/Container";

interface ResponsiveContainerIf extends Omit<typeof Container, "sx"> {}

const ResponsiveContainer = (props: ResponsiveContainerIf) => {
    return (
        <Container
            sx={(theme) => ({
                maxWidth: "md",
                [theme.breakpoints.up("lg")]: {
                    maxWidth: "lg",
                },
            })}
            {...props}
        />
    );
};

export default ResponsiveContainer;
