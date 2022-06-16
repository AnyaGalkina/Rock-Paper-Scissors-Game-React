import React from 'react';
import styles from "./Score.module.css";

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

            <table className={styles.table}>
                <td className={styles.table}>
                    <th className={styles.player}>player 1</th>
                    <tr>{scoreP1}</tr>
                </td>
                <td className={styles.table}>
                    <th className={styles.player}>player 2</th>
                    <tr>{scoreP2}</tr>
                </td>
            </table>

            <button onClick={onClickHandle}
                    className={styles.button}
            >clear score</button>

        </div>
    );
};

export default Score;