import React, {useState} from 'react';
import './App.css';
import paperImg from "./images/paper.jpg";
import scissorsImg from "./images/scissors.jpg";
import rockImg from './images/rock.jpg';
import paperBlueImg from "./images/paper-blue.jpg";
import rockBlueImg from "./images/rock-blue.jpg";
import scissorsBlueImg from "./images/scissors-blue.jpg";
import questionImg from "./images/question.jpg";
import Header from "./components/Header/Header";
import Image from "./components/Image/Image";
import Player2Image from "./components/Player2Image";
import Score from "./components/Score/Score";

//Types
export type PlayerChoiceType = 'rock' | 'scissors' | 'paper' | '';
export type WinnerType = 'Draw!' | 'Player 1 won!' | 'Player 2 won!' | 'Choose your weapon!';
export type ImgIdType = 0 | 1 | 2 | 3;

export type ImgType = {
    id: ImgIdType;
    name: PlayerChoiceType;
    src: string
}

//Const and let
export const scissors = 'scissors';
export const rock = 'rock';
export const paper = 'paper';
export const DRAW: WinnerType = 'Draw!';
export const PLAYER1WIN: WinnerType = 'Player 1 won!';
export const PLAYER2WIN: WinnerType = 'Player 2 won!';
const arrOfWeapons: Array<PlayerChoiceType> = [scissors, rock, paper];

const imgState: Array<ImgType> = [
    {id: 1, name: rock, src: rockImg},
    {id: 2, name: paper, src: paperImg},
    {id: 3, name: scissors, src: scissorsImg}
];

let scoreP2Updated: number = 0;
let scoreP1Updated: number = 0;


const App: React.FC = () => {

    let initScore = 0;

    //useStates
    const [winner, setWinner] = useState<WinnerType>('Choose your weapon!');
    const [player2, setP2Weapon] = useState<PlayerChoiceType>('');
    const [player1, setP1Weapon] = useState<PlayerChoiceType>('');
    const [selectedImg, setSelectedImg] = useState<ImgIdType>(0);
    const [scoreP1, setScoreP1] = useState(initScore);
    const [scoreP2, setScoreP2] = useState(initScore);

    //callbacks
    const onClickClearScore = () => {
        setP1Weapon('');
        setP2Weapon('');
        setWinner('Choose your weapon!');
        setSelectedImg(0);
        scoreP2Updated = 0;
        scoreP1Updated = 0;
        setScoreP1(scoreP1Updated);
        setScoreP2(scoreP2Updated);
    }

    const onImageClickHandler = (player1: PlayerChoiceType, player1Id: ImgIdType) => {
        let p2Choice: PlayerChoiceType = arrOfWeapons[Math.floor(Math.random() * 3)];
        setP1Weapon(player1);
        setSelectedImg(player1Id);
        setP2Weapon(p2Choice);
        setWinner(result);
        setScoreP1(scoreP1Updated);
        setScoreP2(scoreP2Updated);
    }

    //logic
    let result: WinnerType = 'Choose your weapon!';
    if (player1 === player2 && player2) {
        result = DRAW
    } else if (player1 === scissors) {
        player2 === rock ? result = PLAYER2WIN : result = PLAYER1WIN
    } else if (player1 === rock) {
        player2 === paper ? result = PLAYER2WIN : result = PLAYER1WIN
    } else if (player1 === paper) {
        player2 === scissors ? result = PLAYER2WIN : result = PLAYER1WIN
    }

    switch (result) {
        case "Player 1 won!":
            scoreP1Updated = scoreP1 + 1;
            break;
        case "Player 2 won!":
            scoreP2Updated = scoreP2 + 1;
            break;
    }

    let srcPlayer2 = !player2 ? questionImg : player2 === rock ? rockBlueImg : player2 === scissors ? scissorsBlueImg : paperBlueImg;

    let imgPlayer1 = imgState.map(i => {
        return (
            <Image
                src={i.src} name={i.name}
                onImageClickHandler={onImageClickHandler}
                id={i.id} selectedImg={selectedImg}
            />
        )
    })

    //JSX
    return (
        <div className='App'>
            <Score scoreP1={scoreP1Updated} scoreP2={scoreP2Updated} clearScore={onClickClearScore}/>
            <Header result={result}/>
            {imgPlayer1}
            <Player2Image src={srcPlayer2} name={player2} id={0}/>
        </div>
    )
}

export default App;
