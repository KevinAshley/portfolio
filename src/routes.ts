/** @format */

import HomeIcon from "@mui/icons-material/Home";
import CalculateIcon from "@mui/icons-material/Calculate";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import CategoryIcon from "@mui/icons-material/Category";
import Checklist from "@mui/icons-material/Checklist";

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
        github: "https://github.com/KevinAshley/portfolio/blob/main/src/app/calculator/page.tsx",
        description: "Basic mathematical calculator for quick calculations",
    },
    {
        label: "Cricket Scoreboard",
        route: "/cricket-scoreboard/",
        icon: ScoreboardIcon,
        github: "https://github.com/KevinAshley/portfolio/blob/main/src/app/cricket-scoreboard/page.tsx",
        description: "Scoreboard for the popular dart game known as 'Cricket'",
    },
    {
        label: "Memory Game",
        route: "/memory-game/",
        icon: PsychologyAltIcon,
        github: "https://github.com/KevinAshley/portfolio/blob/main/src/app/memory-game/page.tsx",
        description: "Test your memory with this card matching game",
    },
    {
        label: "Todo List",
        route: "/todo-list/",
        icon: Checklist,
        github: "https://github.com/KevinAshley/portfolio/blob/main/src/app/todo-list/page.tsx",
        description: "TODO List that reads and writes to the database",
    },
];

export const routes = mainRoutes.concat(portfolioRoutes);
