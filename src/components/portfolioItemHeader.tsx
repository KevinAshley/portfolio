"use client";

import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { portfolioRoutes } from "@/routes";
import { usePathname } from "next/navigation";
import Typography from "@mui/material/Typography";

const PortfolioItemHeader = () => {
    const pathname = usePathname();
    const portfolioEntry = portfolioRoutes.find((item) =>
        item.path.includes(pathname)
    );
    return (
        <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="h1" gutterBottom={true}>
                {portfolioEntry?.label}
            </Typography>
            <Typography variant={"body1"} gutterBottom={true}>
                {portfolioEntry?.pageDescription}
            </Typography>
            {portfolioEntry?.github && (
                <Box sx={{ mb: 2 }}>
                    <Link href={portfolioEntry?.github} target="_blank">
                        View Source Code
                    </Link>
                </Box>
            )}
        </Box>
    );
};

export default PortfolioItemHeader;
