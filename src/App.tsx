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

export const scissors = 'scissors';
export const rock = 'rock';
export const paper = 'paper';
export const DRAW: WinnerType = 'Draw!';
export const PLAYER1WIN: WinnerType = 'Player 1 won!';
export const PLAYER2WIN: WinnerType = 'Player 2 won!';
const arrOfWeapons = [scissors, rock, paper];

// export type PlayerChoiceType = 'rock' | 'scissors' | 'paper' | '';
// export type WinnerType = 'Draw!' | 'Player 1 won!' | 'Player 2 won!' | 'Choose your weapon!';
export type WinnerType = string;
export type PlayerChoiceType = string;
// export type ScoreType = {
//     score: number;
//     // p2Score: number
// }

// export type PlayerType = {
//     playerName: "Player 1" | "Player 2";
//     weapon: string;
//     score: number
// }

//
const players = [
    // player1:
    {
        id: 1,
        // playerName: "Player 1", weapon: '',
        score: 0
    },
    // player2:
    {
        id: 2,
        // playerName: "Player 2", weapon: '',
        score: 0
    }
]
// }

export type PlayerType = {
    id: number,
    // playerName: string;
    // weapon: string;
    score: number
}

// export type PlayersType = {
//     player1: PlayerType;
//     player2: PlayersType
// }
export type ImgType = {
    id: number;
    name: string;
    src: string
}

export type SelectedImgType = 0 | 1 | 2 | 3

const imgState = [
    {id: 1, name: rock,  src: rockImg },
    {id: 2, name: paper,  src: paperImg },
    {id: 3, name: scissors,  src: scissorsImg }
];

const App: React.FC = () => {

    // const [imgState, setImgState] = useState<Array<ImgType>>( [
    //     {id: 1, name: rock,  src: rockImg },
    //     {id: 2, name: paper,  src: paperImg },
    //     {id: 3, name: scissors,  src: scissorsImg }
    // ];);
    const [winner, setWinner] = useState<WinnerType>('Choose your weapon!');
    const [p2, setP2Weapon] = useState<PlayerChoiceType>('');
    const [p1, setP1Weapon] = useState<PlayerChoiceType>('');
    const [selectedImg, setSelectedImg] = useState<SelectedImgType> (0);
    //@ts-ignore

    // const [score, setScore] = useState<PlayersType>(players)


    const onImageClickHandler = (p1: PlayerChoiceType, p1Id: SelectedImgType) => {
        let p2Choice: PlayerChoiceType = arrOfWeapons[Math.floor(Math.random() * 3)];
        setP1Weapon(p1);
        setSelectedImg(p1Id);
        setP2Weapon(p2Choice);
        setWinner(result);
        //@ts-ignore

        //     result === PLAYER1WIN ? setScore([...players, players.player1.score : score += 1
        // ]) :
        //
        //     result === PLAYER2WIN ? setScore([...players, players.player2.score : score += 1
        // ])
    }

    const onClickClearScore = () => {
        // let clearedScore = players.map(p => p.score = 0)
        // setScore([{...players, score: 0 }])
        //  console.log("you want to clear score!")
    }

    let result: WinnerType = 'Choose your weapon!';
    if (p1 === p2 && p2) {
        result = DRAW
    } else if (p1 === scissors) {
        p2 === rock ? result = PLAYER2WIN : result = PLAYER1WIN
    } else if (p1 === rock) {
        p2 === paper ? result = PLAYER2WIN : result = PLAYER1WIN
    } else if (p1 === paper) {
        p2 === scissors ? result = PLAYER2WIN : result = PLAYER1WIN
    }

    // let scoreChange = 0;
    // result === PLAYER2WIN  ? scoreChange

    let srcPlayer2 = !p2 ? questionImg : p2 === rock ? rockBlueImg : p2 === scissors ? scissorsBlueImg : paperBlueImg;
    let imgPlayer1 = imgState.map(i => {
        return(
            <Image src={i.src} name={i.name} onImageClickHandler={onImageClickHandler}
                   id={i.id} selectedImg={selectedImg}
            />
        )
    })

    return (
        <div className='App'>
            <div className='app-wrapper'>
                <div className='app-wrapper-score'>
                    <Score players={players} clearScore={onClickClearScore}/>
                </div>
                <div className='app-wrapper-header'>
                    <Header result={result}/>
                </div>
            </div>
            <div>
                {imgPlayer1}
            </div>
            <Player2Image src={srcPlayer2} name={p2}/>
        </div>
    )
}

export default App;
