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
    // faLinux,
} from "@fortawesome/free-brands-svg-icons";
import Box from "@mui/material/Box";
import { MuiLogo, NextLogo } from "./logos";

const iconSize = "3x";

const icons = [
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
];

const boxStyles = {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
        opacity: "0.8",
        transform: "scale(0.9)",
        transition: "0.25s",
    },
    "&:hover > *": {
        transform: "scale(1)",
        opacity: "1",
    },
};

const BrandIconsGrid = () => {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
                padding: "2rem",
            }}
        >
            <Box sx={boxStyles}>
                <MuiLogo
                    sx={{
                        fontSize: "3em",
                    }}
                />
            </Box>
            <Box sx={boxStyles}>
                <NextLogo
                    sx={{
                        fontSize: "5em",
                    }}
                />
            </Box>
            {icons.map((icon, index) => {
                return (
                    <Box key={index} sx={boxStyles}>
                        <FontAwesomeIcon icon={icon} size={iconSize} />
                    </Box>
                );
            })}
        </Box>
    );
};

export default BrandIconsGrid;
