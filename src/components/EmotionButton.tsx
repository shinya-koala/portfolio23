import React, { useState } from "react";
import Image from "next/image";
import { EmotionTypeDef, EmotionLevelDef } from "@/constants";
import styles from "./EmotionButton.module.scss";

type Props = {
  emotionType: string;
  level?: string;
  onClick(): void;
};

export function EmotionButton(props: Props) {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const { emotionType, level, onClick } = props;

  const handleButtonClick = () => {
    onClick();
    // setIsButtonPressed(!isButtonPressed);
  };

  const _level = level ? level : "Normal";
  const iconPath = `/emotion/${emotionType}/${_level}.svg`;
  const buttonText = `${level || ""} ${emotionType}`;

  return (
    <button
      className={`
        ${isButtonPressed ? styles["button-pushed"] : styles["button-normal"]}
        ${styles["button-styles"]}
        `}
      onClick={handleButtonClick}
    >
      <Image
        src={iconPath}
        alt={`icon for ${level || ""}${emotionType}`}
        width={96}
        height={96}
        layout="fixed"
        className={styles["icon-image"]}
      />
      <p className={styles["button-txt"]}>{buttonText}</p>
    </button>
  );
}
