import { useState, useContext } from "react";
import { EmotionDataContext } from "@/contexts/emotionDataContext";
import LevelSelectModal from "@/components/LevelSelectModal";
import type { IEmotion, EmotionDataContextValue } from "@/types";
import { EmotionTypeDef, EmotionLevelDef } from "@/constants";
import styles from "./emotion.module.scss";
import { EmotionButton } from "@/components/EmotionButton";
import { MainLayout } from "@/layout/MainLayout";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
export default function Home() {
  const { addUserEmotion } = useContext(
    EmotionDataContext
  ) as EmotionDataContextValue;
  const [showModal, setShowModal] = useState(false);
  const { loggedUsername } = useAuth();
  const [emotion, setEmotion] = useState<IEmotion>({
    type: "",
    level: "",
    timestamp: 0,
  });

  const closeModal = () => {
    setShowModal(false);
  };

  const setEmotionLevel = (level: string) => {
    const updateEmotion = (prevEmotion: IEmotion) => {
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
      level: "",
      timestamp: 0,
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
    const { type, level, timestamp } = emotion;
    if (type === "" || level === "" || timestamp === 0) {
      return false;
    }
    addUserEmotion(loggedUsername, emotion);
    return true;
  }

  // 未ログイン時の表示
  if (loggedUsername === "") {
    return (
      <div className={styles["wrap"]}>
        <div className={styles["inner"]}>
          <Link className={styles["link-text"]} href="../../emotion-sync/login">
            <span className={styles["border"]}>ログイン</span>
            してください。
          </Link>
        </div>
      </div>
    );
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
            closeModal={closeModal}
            onClickLevel={onClickLevel}
            onClickRegister={onClickRegister}
          />
        </div>
      </section>
    </MainLayout>
  );
}
