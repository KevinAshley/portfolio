"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareJs,
    faDocker,
    faReact,
    faNode,
    faHtml5,
    faPhp,
    faLaravel,
    faCss3Alt,
    faSquareGit,
    faGithub,
    faCloudflare,
    faStripe,
    faAws,
    faFortAwesomeAlt,
    faNpm,
    faSass,
    faLess,
    faBootstrap,
    faLinux,
} from "@fortawesome/free-brands-svg-icons";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { MuiLogo, NextLogo } from "@/components/logos";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

const items = [
    {
        iconComponent: MuiLogo,
        label: "Material UI",
        link: "https://mui.com",
    },
    { iconComponent: NextLogo, label: "Next.js", link: "https://nextjs.org" },
    {
        faIcon: faSquareJs,
        label: "Javascript",
        link: "https://en.wikipedia.org/wiki/JavaScript",
    },
    { faIcon: faDocker, label: "Docker", link: "https://www.docker.com" },
    { faIcon: faReact, label: "React", link: "https://react.dev" },
    { faIcon: faNode, label: "Node.js", link: "https://nodejs.org" },
    {
        faIcon: faHtml5,
        label: "HTML",
        link: "https://en.wikipedia.org/wiki/HTML5",
    },
    { faIcon: faPhp, label: "PHP", link: "https://www.php.net" },
    { faIcon: faLaravel, label: "Laravel", link: "https://laravel.com" },
    {
        faIcon: faCss3Alt,
        label: "CSS",
        link: "https://en.wikipedia.org/wiki/CSS",
    },
    { faIcon: faSquareGit, label: "Git", link: "https://git-scm.com" },
    { faIcon: faGithub, label: "Github", link: "https://github.com" },
    {
        faIcon: faCloudflare,
        label: "Cloudflare",
        link: "https://www.cloudflare.com",
    },
    { faIcon: faStripe, label: "Stripe", link: "https://stripe.com" },
    { faIcon: faAws, label: "AWS", link: "https://aws.amazon.com" },
    {
        faIcon: faFortAwesomeAlt,
        label: "Fort Awesome",
        link: "https://fortawesome.com",
    },
    { faIcon: faNpm, label: "NPM", link: "https://www.npmjs.com" },
    {
        faIcon: faLinux,
        label: "Linux",
        link: "https://www.linux.org",
    },
    { faIcon: faSass, label: "Sass", link: "https://sass-lang.com" },
    { faIcon: faLess, label: "Less", link: "https://lesscss.org" },
    {
        faIcon: faBootstrap,
        label: "Bootstrap",
        link: "https://getbootstrap.com",
    },
];

const iconSize = "3x";

const BrandIconsGrid = () => {
    return (
        <Box
            sx={(theme) => ({
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                [theme.breakpoints.up("sm")]: {
                    gridTemplateColumns: "1fr 1fr 1fr",
                },
                [theme.breakpoints.up("md")]: {
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                },
                [theme.breakpoints.up("lg")]: {
                    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
                },
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
            })}
        >
            {items.map((item, index) => {
                const IconComponent = item.iconComponent;
                return (
                    <Tooltip key={index} title={item.label}>
                        <Card elevation={5} sx={{ height: "100%" }}>
                            <CardActionArea
                                href={item.link}
                                target={"_blank"}
                                sx={{
                                    height: "100%",
                                    padding: "1.25rem 2rem",
                                    textAlign: "center",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    "& > svg": {
                                        transform: "scale(0.9)",
                                        transition:
                                            "ease transform 0.25s !important",
                                    },
                                    "&:hover > svg": {
                                        transform: "scale(1)",
                                    },
                                }}
                            >
                                {!!IconComponent && <IconComponent />}
                                {item.faIcon && (
                                    <FontAwesomeIcon
                                        icon={item.faIcon}
                                        size={iconSize}
                                    />
                                )}
                            </CardActionArea>
                        </Card>
                    </Tooltip>
                );
            })}
        </Box>
    );
};

export default BrandIconsGrid;
