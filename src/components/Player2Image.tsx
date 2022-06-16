import React from 'react';
import Image from "./Image/Image";
import {PlayerChoiceType, ImgIdType} from "../App";

type PropsType = {
    name: PlayerChoiceType;
    src: string;
    id: ImgIdType;
}

const Player2Image: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Image name={props.name} src={props.src} id={props.id}/>
        </div>
    );
};

export default Player2Image;