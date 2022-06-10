import React from 'react';
import {PlayerType} from "../../App";
import styles from "./Score.module.css";

type PropsType = {
    players: Array<PlayerType>;
    clearScore: () => void
}
const Score = (props: PropsType) => {

    const scoreTable = props.players.map((p, index) =>{
        return (
            <tr key={index} >
                {/*<td  className={styles.table}>{p.playerName}</td>*/}
                <td  className={styles.table}>{p.score}</td>
            </tr>)})

    return (
        <div className={styles.score}>
            <h3>Score</h3>
            <table className={styles.table}>
                {scoreTable}
            </table>
            <button
                onClick={()=>{props.clearScore()}}
                className={styles.button}
            >Clear score</button>
        </div>
    );
};

export default Score;