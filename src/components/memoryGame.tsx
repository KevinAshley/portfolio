"use client";

import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AnchorIcon from "@mui/icons-material/Anchor";
import BackHandIcon from "@mui/icons-material/BackHand";
import BalanceIcon from "@mui/icons-material/Balance";
import CastleIcon from "@mui/icons-material/Castle";
import GithubLinkout from "@/components/githubLinkout";

const uniqueCardsArray = [
    {
        icon: AcUnitIcon,
        originalIndex: 0,
    },
    {
        icon: AirportShuttleIcon,
        originalIndex: 1,
    },
    {
        icon: AnchorIcon,
        originalIndex: 2,
    },
    {
        icon: BackHandIcon,
        originalIndex: 3,
    },
    {
        icon: BalanceIcon,
        originalIndex: 4,
    },
    {
        icon: CastleIcon,
        originalIndex: 5,
    },
];

const combinedCardsArray = [...uniqueCardsArray, ...uniqueCardsArray];

const cardsArrayWithoutIcons = combinedCardsArray.map((thisCardObject) => {
    const { originalIndex } = thisCardObject;
    return {
        originalIndex,
        selected: false,
        matched: false,
    };
});

const Item = (props: any) => {
    const { selected, matched, isFlashing, ...otherProps } = props;
    return (
        <Paper
            sx={{
                //  use CSS vars here instead
                // visibility: selected ? "visible" : "hidden",
                backgroundColor:
                    isFlashing || selected
                        ? "var(--mui-palette-subtleHighlight)"
                        : undefined,
                // : matched
                // ? "var(--mui-palette-dark)"
                // : "var(--mui-palette-light)",
                // color: matched ? "var(--mui-palette-primary-main)" : undefined,
                // ...theme.typography.body2,
                padding: 4,
                textAlign: "center",
                cursor: matched ? "auto" : "pointer",
            }}
            elevation={matched ? 0 : 5}
            {...otherProps}
        />
    );
};

const findSelectedIndex = (cards: any[]) => {
    const selectedCardIndex = cards.findIndex((card) => card.selected);
    return selectedCardIndex;
};

const shuffleArray = (originalArray: any[]) => {
    const shuffledArray = originalArray
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    return shuffledArray;
};

const MemoryGame = () => {
    const [cards, setCards] = useState(shuffleArray(cardsArrayWithoutIcons));
    const [flashing, setFlashing] = useState<number[]>([]);
    const [resetDialogIsOpen, setResetDialogIsOpen] = useState(false);
    const [movesCount, setMovesCount] = useState(0);
    const [winnerDialogOpen, setWinnerDialogOpen] = useState(false);

    const handleCardClick = (params: any) => {
        const { index } = params;
        const newCards = JSON.parse(JSON.stringify(cards));
        const thisCard = newCards[index];
        const selectedCardIndex = findSelectedIndex(newCards);
        const selectedCard = newCards[selectedCardIndex];

        // console.log("hoo", selectedCardIndex);
        if (selectedCardIndex === -1) {
            /// make a selection
            newCards[index].selected = true;
        } else if (selectedCardIndex === index) {
            /// undo selection
            newCards[selectedCardIndex].selected = false;
        } else if (thisCard.originalIndex === selectedCard.originalIndex) {
            /// correct selection
            newCards[selectedCardIndex].selected = false;
            newCards[selectedCardIndex].matched = true;
            newCards[index].matched = true;
            flashCardsByIndex([selectedCardIndex, index]);
            setMovesCount(movesCount + 1);
        } else {
            /// wrong selection
            newCards[selectedCardIndex].selected = false;
            flashCardsByIndex([selectedCardIndex, index]);
            setMovesCount(movesCount + 1);
        }
        setCards(newCards);
    };
    const handleClickOpen = () => {
        setResetDialogIsOpen(true);
    };
    const handleClose = () => {
        setResetDialogIsOpen(false);
    };
    const resetAll = () => {
        setCards(shuffleArray(cardsArrayWithoutIcons));
        setMovesCount(0);
        setWinnerDialogOpen(false);
    };

    const handleResetAndClose = () => {
        // setTally(JSON.parse(JSON.stringify(startingTallyState)));
        setResetDialogIsOpen(false);
        resetAll();
    };
    const flashCardsByIndex = (indexes: number[] = []) => {
        setFlashing(indexes);
    };
    useEffect(() => {
        if (flashing.length) {
            setTimeout(() => {
                setFlashing([]);
            }, 500);
        }
    }, [flashing]);

    const matchedCards = cards.filter((card) => {
        return card.matched;
    });

    const winner = cards.length === matchedCards.length;

    useEffect(() => {
        if (winner) {
            setWinnerDialogOpen(true);
        }
    }, [winner]);

    const toggleWinnerDialog = () => {
        setWinnerDialogOpen(false);
    };

    console.log("cards", cards);
    // console.log("cardsMatched", matchedCards);

    return (
        <Box maxWidth="md" sx={{ margin: "auto" }}>
            <GithubLinkout />
            <Grid container spacing={2}>
                {cards.map((thisCard, thisIndex) => {
                    const { originalIndex, selected, matched } = thisCard;
                    const isFlashing = flashing.includes(thisIndex);
                    const Icon = uniqueCardsArray[originalIndex].icon;
                    const handleThisCardClick = () => {
                        handleCardClick({ index: thisIndex, originalIndex });
                    };
                    return (
                        <Grid
                            item
                            xs={4}
                            md={3}
                            key={thisIndex}
                            onClick={!matched ? handleThisCardClick : undefined}
                        >
                            <Item {...{ selected, matched, isFlashing }}>
                                <Icon
                                    fontSize="large"
                                    sx={{
                                        visibility:
                                            selected || matched || isFlashing
                                                ? "auto"
                                                : "hidden",
                                    }}
                                />
                            </Item>
                        </Grid>
                    );
                })}
            </Grid>
            <Box sx={{ textAlign: "center", mt: 3, mb: 5 }}>
                <Box sx={{ textAlign: "center", fontSize: "4rem" }}>
                    {movesCount}
                </Box>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontSize: "1rem" }}
                >
                    MOVES
                </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={handleClickOpen}
                >
                    Reset Game
                </Button>
            </Box>

            <Dialog open={resetDialogIsOpen} onClose={handleClose}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to reset the game?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleResetAndClose} variant="contained">
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={winnerDialogOpen} onClose={toggleWinnerDialog}>
                <DialogTitle>You Won!</DialogTitle>
                <Box
                    sx={{
                        fontSize: "6rem",
                        textAlign: "center",
                    }}
                >
                    🎉
                </Box>
                <DialogContent>
                    <DialogContentText>
                        Wow, in only {movesCount} moves - great job!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={toggleWinnerDialog}>Close</Button>
                    <Button onClick={handleResetAndClose}>Play Again</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default MemoryGame;
