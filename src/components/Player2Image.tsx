import React from 'react';
import Image from "./Image/Image";
import {PlayerChoiceType} from "../App";

type PropsType = {
    name: PlayerChoiceType;
    src: string;
}

const Player2Image = (props: PropsType) => {
    return (
        <div>
            <Image name={props.name} src={props.src}/>
        </div>
    );
};

export default Player2Image;