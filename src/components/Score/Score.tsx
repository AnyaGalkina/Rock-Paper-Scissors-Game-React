import React from 'react';
import styles from "./Score.module.css";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

type PropsType = {
    scoreP1: number;
    scoreP2: number;
    clearScore: () => void
}
const Score: React.FC<PropsType> = ({scoreP2, scoreP1, clearScore}) => {

    let onClickHandle = () => {
        clearScore();
    }

    return (
        <div className={styles.score}>
            {/*<table className={styles.table}>*/}
            {/*    <td className={styles.table}>*/}
            {/*        <th className={styles.player}>player 1</th>*/}
            {/*        <tr>{scoreP1}</tr>*/}
            {/*    </td>*/}
            {/*    <td className={styles.table}>*/}
            {/*        <th className={styles.player}>player 2</th>*/}
            {/*        <tr>{scoreP2}</tr>*/}
            {/*    </td>*/}
            {/*</table>*/}

            <TableContainer component={Paper} sx={{ width: 220,
                // backgroundColor: "#d4b31d", opacity: "80%"
                // border: "2px solid #d4b31d"
            }}>
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell sx={{ fontWeight: "bold"}}>PLAYER 1</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold"}}>PLAYER 2</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{ fontWeight: "bold"}}>{scoreP1}</TableCell>
                                <TableCell align="right" sx={{fontWeight: "bold"}}>{scoreP2}</TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Button onClick={onClickHandle}
                    style={{textAlign: "start", alignItems: "start"}}
                    variant="outlined"
                    color={"success"}
                    size="small"
            >clear score</Button>
        </div>
    );
};

export default Score;