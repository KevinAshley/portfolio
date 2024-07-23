import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import Copyright from "./copyright";
import { ReactLogo, MuiLogo, NextLogo, VercelLogo } from "../components/logos";
import Typography from "@mui/material/Typography";

import RoutedLink from "@/components/routedLink";

const height = "36px;";

const Footer = () => {
    return (
        <Box
            sx={{
                // height,
                marginTop: "3rem",
            }}
        >
            <Typography
                component="p"
                variant={"caption"}
                sx={{
                    textAlign: "center",
                    padding: "10px",
                    borderBottom: "solid var(--mui-palette-border) 1px",
                }}
            >
                Website powered by NextJS, React, Material UI components,
                and&nbsp;Vercel hosting.{" "}
                <RoutedLink
                    href="https://github.com/KevinAshley/portfolio"
                    target="_blank"
                >
                    View source on Github
                </RoutedLink>
                .
            </Typography>
            <Box
                sx={{
                    background: "var(--mui-palette-ribbon)",
                    textAlign: "center",
                    lineHeight: 0,
                    padding: "0.5rem",
                }}
            >
                <NextLogo />
                <ReactLogo />
                <MuiLogo />
                <VercelLogo />
            </Box>

            <Box
                component="footer"
                sx={{
                    height,
                    // marginTop: "3rem",
                }}
            >
                <Box
                    sx={{
                        px: 2,
                        py: 1,
                        bgcolor: grey["800"],
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height,
                    }}
                >
                    <Copyright />
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
