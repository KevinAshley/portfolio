/** @format */

import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { portfolioRoutes } from "@/routes";
import { usePathname } from "next/navigation";

const GithubLinkout = () => {
    const pathname = usePathname();
    const portfolioEntry = portfolioRoutes.find((item) =>
        item.path.includes(pathname)
    );
    const githubUrl = portfolioEntry?.github;
    if (!githubUrl) {
        return <Fragment></Fragment>;
    }
    return (
        <Box sx={{ textAlign: "center", my: 2 }}>
            <Link href={githubUrl} target="_blank">
                View Source Code
            </Link>
        </Box>
    );
};

export default GithubLinkout;
