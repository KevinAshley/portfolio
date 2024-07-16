/** @format */

import React, { Fragment, useState } from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const LoginAvatar = () => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const toggleDialog = () => {
        setDialogIsOpen(!dialogIsOpen);
    };

    return (
        <Fragment>
            <IconButton color="inherit" sx={{ p: 0.5 }} onClick={toggleDialog}>
                <Avatar></Avatar>
            </IconButton>
            <Dialog open={dialogIsOpen} onClose={toggleDialog}>
                <DialogTitle>Log In</DialogTitle>
                <DialogContent sx={{ textAlign: "center" }}>
                    <Box sx={{ fontSize: "3rem" }}>🏗️</Box>
                    <Typography
                        component="p"
                        sx={{
                            fontSize: "10px",
                            marginBottom: "2rem",
                        }}
                    >
                        Under Construction.
                    </Typography>
                    <DialogContentText>Authentication UI coming soon!</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={toggleDialog}>Close</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
};

export default LoginAvatar;
