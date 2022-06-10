import React from 'react';
import styles from './Header.module.css';
import {PLAYER1WIN, PLAYER2WIN, WinnerType} from "../../App";

type PropsType = {
    result: WinnerType;
}

const Header = (props: PropsType) => {
    return (
        <div className={styles.grid}>
            <h2
                className={props.result === PLAYER2WIN ? styles.looser :
                    props.result === PLAYER1WIN ? styles.winner : undefined}
            >{props.result}</h2>
        </div>
    );
};

export default Header;