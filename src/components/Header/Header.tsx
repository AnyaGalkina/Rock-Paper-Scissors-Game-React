import React from 'react';
import styles from './Header.module.css';
import {PLAYER1WIN, PLAYER2WIN, WinnerType} from "../../App";

type PropsType = {
    result: WinnerType;
}

const Header: React.FC<PropsType> = ({result}) => {

    let headerStyle = result === PLAYER2WIN ? styles.looser :
        result === PLAYER1WIN ? styles.winner : '';

    return (
        <div>
            <h2 style={{margin: 0}} className={headerStyle}>{result}</h2>
        </div>
    );
};

export default Header;