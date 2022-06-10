import React from "react";
import styles from "./Image.module.css";
import { PlayerChoiceType,  SelectedImgType } from "../../App";

export type ImagePropsType = {
    id?: number
    name: PlayerChoiceType
    src: string;
    onImageClickHandler?: (p1: PlayerChoiceType, p1Id: SelectedImgType) => void;
    selectedImg?:  SelectedImgType;
}

const Image = (props: ImagePropsType) => {

    const onClickHandler = () => {
        //@ts-ignore
        props.onImageClickHandler(props.name, props.id);
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
