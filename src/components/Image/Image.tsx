import React from "react";
import styles from "./Image.module.css";
import {PlayerChoiceType, ImgIdType} from "../../App";

export type ImagePropsType = {
    id: ImgIdType;
    name: PlayerChoiceType;
    src: string;
    onImageClickHandler?: (p1: PlayerChoiceType, p1Id: ImgIdType) => void;
    selectedImg?: ImgIdType;
}

const Image: React.FC<ImagePropsType> = (props) => {

    const onClickHandler = () => {
        if (props.onImageClickHandler) {
            props.onImageClickHandler(props.name, props.id);
        }
    }

    return (
        <img
            className={props.id === props.selectedImg ? `${styles.active}` : `${styles.img}`}
            onClick={onClickHandler}
            src={props.src} alt={props.name}
        />
    );
};

export default Image;
