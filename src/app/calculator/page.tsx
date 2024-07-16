"use client";

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import GithubLinkout from "../../components/githubLinkout";
const numKeysArray = new Array(9).fill(0);

const Calculator = () => {
    const [total, setTotal] = useState("0");
    const [operator, setOperator] = useState<string | null>("");
    const [operand, setOperand] = useState<string | null>("");

    const handleNumberPress = (num: string | number) => {
        let newNumber = operator
            ? (operand || 0).toString() + num.toString()
            : total.toString() + num.toString();
        while (
            newNumber !== "0" &&
            newNumber.substring(0, 1) === "0" &&
            newNumber.substring(0, 2) !== "0."
        ) {
            newNumber = newNumber.substring(1);
        }

        /// DO NOT ALLOW MORE THAN ONE DECIMAL
        if (operator) {
            setOperand(newNumber);
        } else {
            setTotal(newNumber);
        }
    };

    const handleOperatorPress = (op: string) => {
        setOperator(op);
    };

    const handleClear = () => {
        setTotal("0");
        setOperand(null);
        setOperator(null);
    };

    const equals = () => {
        let newTotal = 0;
        if (operator === "+") {
            newTotal = Number(total) + Number(operand);
        } else if (operator === "-") {
            newTotal = Number(total) - Number(operand);
        } else if (operator === "*") {
            newTotal = Number(total) * Number(operand);
        } else if (operator === "/") {
            newTotal = Number(total) / Number(operand);
        }
        setTotal(newTotal.toString());
        setOperator(null);
        setOperand(null);
    };
    // console.log(total, operator, operand);

    return (
        <div>
            <GithubLinkout />
            <Paper
                sx={{
                    padding: "1rem",
                    maxWidth: "350px",
                    margin: "auto",
                }}
            >
                <OutlinedInput
                    // type="number"
                    fullWidth
                    disabled
                    value={operand ? operand : total}
                    sx={{
                        marginBottom: "1rem",
                    }}
                />
                <Grid container spacing={1}>
                    <Grid item xs={9}>
                        <Grid
                            container
                            spacing={1}
                            sx={{
                                flexWrap: "wrap-reverse !important",
                            }}
                        >
                            <Grid item xs={4}>
                                <Button
                                    variant="contained"
                                    color="error"
                                    fullWidth
                                    onClick={handleClear}
                                >
                                    C
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={() => handleNumberPress(0)}
                                >
                                    0
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={() => handleNumberPress(".")}
                                >
                                    .
                                </Button>
                            </Grid>

                            {numKeysArray.map((x, index) => {
                                const numValue = index + 1;
                                const handleClick = () =>
                                    handleNumberPress(numValue);
                                return (
                                    <Grid item xs={4} key={index}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            onClick={handleClick}
                                        >
                                            {numValue}
                                        </Button>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container spacing={1}>
                            {["*", "/", "+", "-"].map((a, index) => {
                                const handleClick = () =>
                                    handleOperatorPress(a);
                                return (
                                    <Grid item xs={12} key={index}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            fullWidth
                                            onClick={handleClick}
                                        >
                                            {a}
                                        </Button>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            onClick={equals}
                        >
                            =
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Calculator;
