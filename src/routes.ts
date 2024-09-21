/** @format */

import HomeIcon from "@mui/icons-material/Home";
import CalculateIcon from "@mui/icons-material/Calculate";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import Checklist from "@mui/icons-material/Checklist";
import PeopleIcon from "@mui/icons-material/People";
import { RouteGroupIf, RouteIf } from "@/sharedComponents/types";
import SubPageWrapper from "@/sharedComponents/subPageWrapper";

import Homepage from "./components/homepage";
import Calculator from "./components/calculator";
import CricketScoreboard from "./components/cricketScoreboard";
import MemoryGame from "./components/memoryGame";
import TodoList from "./components/todoList";
import UsersList from "./components/usersList";

const siteName = "Kevin Ashley";

export const makePageTitle = (title: string) => {
    return `${siteName} | ${title}`;
};

export const mainRoutes: RouteIf[] = [
    {
        pageTitle: makePageTitle("Home"),
        pageDescription: "Kevin Ashley's full-stack web development portfolio",
        label: "Home",
        path: "/",
        icon: HomeIcon,
        component: Homepage,
    },
];

export const portfolioRoutes: RouteIf[] = [
    {
        pageTitle: makePageTitle("Calculator"),
        pageDescription: "Basic mathematical calculator for quick calculations",
        label: "Calculator",
        path: "/calculator",
        icon: CalculateIcon,
        github: "https://github.com/KevinAshley/portfolio/blob/main/src/app/calculator/page.tsx",
        component: Calculator,
        componentWrapper: SubPageWrapper,
    },
    {
        pageTitle: makePageTitle("Cricket Scoreboard"),
        pageDescription: `Scoreboard for the popular dart game known as "Cricket"`,
        label: "Cricket Scoreboard",
        path: "/cricket-scoreboard",
        icon: ScoreboardIcon,
        github: "https://github.com/KevinAshley/portfolio/blob/main/src/app/cricket-scoreboard/page.tsx",
        component: CricketScoreboard,
        componentWrapper: SubPageWrapper,
    },
    {
        pageTitle: makePageTitle("Memory Game"),
        pageDescription: "Test your memory with this card matching game",
        label: "Memory Game",
        path: "/memory-game",
        icon: PsychologyAltIcon,
        github: "https://github.com/KevinAshley/portfolio/blob/main/src/app/memory-game/page.tsx",
        component: MemoryGame,
        componentWrapper: SubPageWrapper,
    },
    {
        pageTitle: makePageTitle("Todo List"),
        pageDescription: "Todo List that reads and writes to the database",
        label: "Todo List",
        path: "/todo-list",
        icon: Checklist,
        github: "https://github.com/KevinAshley/portfolio/blob/main/src/app/todo-list/page.tsx",
        component: TodoList,
        componentWrapper: SubPageWrapper,
    },
];

export const portfolioRoutesWithoutComponents = portfolioRoutes.map(
    (portfolioRoute) => {
        const { component, componentWrapper, ...otherProps } = portfolioRoute;
        return {
            ...otherProps,
        };
    }
);

export const adminRoutes: RouteIf[] = [
    {
        pageTitle: makePageTitle("Users List"),
        pageDescription: "Admin only users list",
        label: "Users List",
        path: "/admin/users-list",
        icon: PeopleIcon,
        component: UsersList,
        componentWrapper: SubPageWrapper,
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
];

export const groupedRoutesForAdmins: RouteGroupIf[] = [
    ...groupedRoutes,
    {
        label: "Admin",
        routes: adminRoutes,
    },
];

export const allRoutes: RouteIf[] = groupedRoutesForAdmins
    .map((routeGroup) => {
        return routeGroup.routes;
    })
    .flat(1);

// export a pathname to titles map
export const pathnameToMetadataMap = groupedRoutesForAdmins.reduce(
    (pathnameToMetadata, routeGroup) => {
        routeGroup.routes.forEach((route) => {
            pathnameToMetadata[route.path] = {
                pageTitle: route.pageTitle,
                pageDescription: route.pageDescription,
            };
        });
        return pathnameToMetadata;
    },
    {} as {
        [key: string]: {
            pageTitle: string;
            pageDescription: string;
        };
    }
);

export const routesList = groupedRoutes.reduce(
    (accumulator: string[], routeGroup) => {
        accumulator.push(...routeGroup.routes.map((route) => route.path));
        return accumulator;
    },
    []
);
