import Box from "@mui/material/Box";
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
            <Box
                sx={{
                    padding: "2rem 0.5rem",
                    background: "var(--mui-palette-ribbon)",
                }}
            >
                <Box
                    sx={{
                        textAlign: "center",
                        lineHeight: 0,
                    }}
                >
                    <NextLogo />
                    <ReactLogo />
                    <MuiLogo />
                    <VercelLogo />
                </Box>

                <Typography
                    component="p"
                    variant={"caption"}
                    sx={{
                        textAlign: "center",
                        // padding: "10px",
                        // borderBottom: "solid var(--mui-palette-border) 1px",
                        background: "var(--mui-palette-ribbon)",
                        marginTop: "1rem",
                    }}
                >
                    Website powered by NextJS, React, Material UI components,
                    and&nbsp;Vercel hosting.
                    <br />
                    <RoutedLink
                        href="https://github.com/KevinAshley/portfolio"
                        target="_blank"
                    >
                        View full source on Github
                    </RoutedLink>
                    .
                </Typography>
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
                        bgcolor: "var(--mui-palette-dark)",
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
