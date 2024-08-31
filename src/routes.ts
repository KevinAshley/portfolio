/** @format */

import HomeIcon from "@mui/icons-material/Home";
import CalculateIcon from "@mui/icons-material/Calculate";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import Checklist from "@mui/icons-material/Checklist";
import PeopleIcon from "@mui/icons-material/People";
import { RouteGroupIf } from "@/sharedComponents/navigator";

export const mainRoutes = [
    {
        label: "Home",
        path: "/",
        icon: HomeIcon,
    },
];

export const portfolioRoutes = [
    {
        label: "Calculator",
        path: "/calculator",
        icon: CalculateIcon,
        github: "https://github.com/KevinAshley/portfolio/blob/main/src/app/calculator/page.tsx",
        description: "Basic mathematical calculator for quick calculations",
    },
    {
        label: "Cricket Scoreboard",
        path: "/cricket-scoreboard",
        icon: ScoreboardIcon,
        github: "https://github.com/KevinAshley/portfolio/blob/main/src/app/cricket-scoreboard/page.tsx",
        description: "Scoreboard for the popular dart game known as 'Cricket'",
    },
    {
        label: "Memory Game",
        path: "/memory-game",
        icon: PsychologyAltIcon,
        github: "https://github.com/KevinAshley/portfolio/blob/main/src/app/memory-game/page.tsx",
        description: "Test your memory with this card matching game",
    },
    {
        label: "Todo List",
        path: "/todo-list",
        icon: Checklist,
        github: "https://github.com/KevinAshley/portfolio/blob/main/src/app/todo-list/page.tsx",
        description: "TODO List that reads and writes to the database",
    },
];

export const adminRoutes = [
    {
        label: "Users List",
        path: "/admin/users-list",
        icon: PeopleIcon,
    },
];

export const groupedRoutes: RouteGroupIf[] = [
    {
        routes: mainRoutes,
    },
    {
        label: "Portfolio",
        routes: portfolioRoutes,
    },
    {
        label: "Admin",
        routes: adminRoutes,
    },
];

export const routesList = groupedRoutes.reduce(
    (accumulator: string[], routeGroup) => {
        accumulator.push(...routeGroup.routes.map((route) => route.path));
        return accumulator;
    },
    []
);
