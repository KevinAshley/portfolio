/** @format */

import HomeIcon from "@mui/icons-material/Home";
import CalculateIcon from "@mui/icons-material/Calculate";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import CategoryIcon from "@mui/icons-material/Category";

export const mainRoutes = [
    {
        label: "Home",
        route: "/",
        icon: HomeIcon,
    },
    // {
    //     label: "Portfolio",
    //     route: "/portfolio/",
    //     icon: CategoryIcon,
    //     suppress: true,
    // },
];

export const portfolioRoutes = [
    {
        label: "Calculator",
        route: "/calculator/",
        icon: CalculateIcon,
        github: "https://github.com/KevinAshley/kashley.net/blob/main/src/pages/calculator.js",
        description: "Basic mathematical calculator for quick calculations",
    },
    {
        label: "Cricket Scoreboard",
        route: "/cricket-scoreboard/",
        icon: ScoreboardIcon,
        github: "https://github.com/KevinAshley/kashley.net/blob/main/src/pages/cricketScoreboard.js",
        description: "Scoreboard for the popular dart game known as 'Cricket'",
    },
    {
        label: "Memory Game",
        route: "/memory-game/",
        icon: PsychologyAltIcon,
        github: "https://github.com/KevinAshley/kashley.net/blob/main/src/pages/memoryGame.js",
        description: "Test your memory with this card matching game",
    },
];

export const routes = mainRoutes.concat(portfolioRoutes);
