import Image from "next/image";
import styles from "./EmotionButton.module.scss";

type Props = {
  emotionType: string;
  level?: string;
  onClick(): void;
  pushedLevel?: string;
};

export function EmotionButton(props: Props) {
  const { emotionType, level, onClick, pushedLevel } = props;

  const handleButtonClick = () => {
    onClick();
  };

  const _level = level ? level : "Normal";
  const iconPath = `/emotion/${emotionType}/${_level}.svg`;
  const buttonText = `${level || ""} ${emotionType}`;
  const isPushed = pushedLevel === _level && _level;

  return (
    <button
      className={`
        ${isPushed ? styles["button-pushed"] : styles["button-normal"]}
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
