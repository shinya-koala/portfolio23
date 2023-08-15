import { useState, useContext } from "react";
import { EmotionDataContext } from "@/context/emotionDataContext";
import LevelSelectModal from "@/components/LevelSelectModal";
import type { IEmotion, EmotionDataContextValue } from "@/types";
import { EmotionTypeDef, EmotionLevelDef } from "@/constants";
import styles from "./Emotion.module.scss";
import { EmotionButton } from "@/components/EmotionButton";
import { MainLayout } from "@/layout/MainLayout";

export default function Home() {
  const { addUserEmotion } = useContext(
    EmotionDataContext
  ) as EmotionDataContextValue;
  const [showModal, setShowModal] = useState(false);
  const [emotion, setEmotion] = useState<IEmotion>({
    type: undefined,
    level: undefined,
    timestamp: undefined,
  });

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const setEmotionLevel = (level: string) => {
    const updateEmotion = (prevEmotion: IEmotion | undefined) => {
      const emotion: IEmotion = {
        type: prevEmotion?.type,
        level,
        timestamp: Date.now(),
      };
      console.log(emotion);
      return emotion;
    };
    setEmotion(updateEmotion);
  };

  const setEmotionTypeAndOpenModal = (type: string) => {
    const emotion: IEmotion = {
      type,
      level: undefined,
      timestamp: undefined,
    };
    setEmotion(emotion);
    setShowModal(true);
  };

  // Happy
  function onClickHappy() {
    setEmotionTypeAndOpenModal(EmotionTypeDef.Happy);
  }

  // Fun
  function onClickFun() {
    setEmotionTypeAndOpenModal(EmotionTypeDef.Fun);
  }

  // Normal
  function onClickNormal() {
    setEmotionTypeAndOpenModal(EmotionTypeDef.Normal);
  }

  // Sad
  function onClickSad() {
    setEmotionTypeAndOpenModal(EmotionTypeDef.Sad);
  }

  // Angry
  function onClickAngry() {
    setEmotionTypeAndOpenModal(EmotionTypeDef.Angry);
  }

  // レベル選択
  function onClickLevel(level: string) {
    setEmotionLevel(level);
  }

  // データ登録
  function onClickRegister() {
    addUserEmotion("demoUser", emotion);
  }

  return (
    <MainLayout>
      <section className={styles["emotion"]}>
        <div className={styles["inner"]}>
          <div className={styles["sec-ttl"]}>
            <h1 className={styles["sec-heading"]}>Emotion</h1>
            <p className={styles["sec-txt"]}>
              今のあなたの気持ちに合う感情を
              <br />
              下のアイコンから選択してください。
            </p>
          </div>

          <div className={styles["emotion-button-area"]}>
            <div className={styles["pop-container"]}>
              <p className={styles["pop-text"]}>今の気持ちは？</p>
            </div>
            <div className={styles["button-area"]}>
              <EmotionButton
                emotionType={EmotionTypeDef.Happy}
                onClick={onClickHappy}
              />
              <EmotionButton
                emotionType={EmotionTypeDef.Fun}
                onClick={onClickFun}
              />
              <EmotionButton
                emotionType={EmotionTypeDef.Normal}
                onClick={onClickNormal}
              />
              <EmotionButton
                emotionType={EmotionTypeDef.Sad}
                onClick={onClickSad}
              />
              <EmotionButton
                emotionType={EmotionTypeDef.Angry}
                onClick={onClickAngry}
              />
            </div>
          </div>

          <LevelSelectModal
            emotion={emotion}
            showModal={showModal}
            handleCloseModal={handleCloseModal}
            onClickLevel={onClickLevel}
            onClickRegister={onClickRegister}
          />
        </div>
      </section>
    </MainLayout>
  );
}
