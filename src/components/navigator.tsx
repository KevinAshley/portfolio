import React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { mainRoutes, portfolioRoutes } from "../routes";
import { usePathname } from "next/navigation";

const categories = [
    {
        children: [...mainRoutes],
    },
    {
        id: "Portfolio",
        children: [...portfolioRoutes],
        href: "/portfolio/",
    },
];

const Navigator = (props: any) => {
    const { open, onClose } = props;
    const pathname = usePathname();

    return (
        <Drawer
            variant="temporary"
            open={open}
            onClose={onClose}
            PaperProps={{ style: { width: 256 } }}
            ModalProps={{
                keepMounted: true,
            }}
        >
            <List disablePadding>
                <ListItem
                    sx={{
                        pt: "10px",
                        pb: "10px",
                        pr: "1rem",
                    }}
                >
                    <IconButton
                        sx={{
                            ml: "auto",
                            display: "inline-block",
                            lineHeight: 0,
                        }}
                        onClick={onClose}
                    >
                        <CloseIcon
                            sx={{
                                fontSize: "1.25rem",
                            }}
                        />
                    </IconButton>
                </ListItem>

                {categories.map(({ id, children, href }, categoryIndex) => (
                    <Box key={categoryIndex}>
                        {id ? (
                            <ListItem sx={{ py: 2, px: 3 }}>
                                <ListItemButton
                                    component={Link}
                                    href={href}
                                    onClick={onClose}
                                    sx={{
                                        padding: 0,
                                        fontSize: "14px",
                                    }}
                                >
                                    {id}
                                </ListItemButton>
                            </ListItem>
                        ) : (
                            <Divider sx={{ mb: 2 }} />
                        )}

                        {children.map(({ label: childId, icon, route }) => {
                            const Icon = icon;
                            const active = pathname === route;
                            return (
                                <ListItem disablePadding key={childId}>
                                    <ListItemButton
                                        selected={active}
                                        sx={{
                                            py: "2px",
                                            px: 3,
                                        }}
                                        component={Link}
                                        href={route}
                                        onClick={onClose}
                                    >
                                        <ListItemIcon>
                                            <Icon />
                                        </ListItemIcon>
                                        <ListItemText>{childId}</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}

                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
            </List>
        </Drawer>
    );
};

export default Navigator;
