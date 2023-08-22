import Modal from "react-modal";
import styles from "./LevelSelectModal.module.scss";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { EmotionButton } from "@/components/EmotionButton";
import { EmotionTypeDef, EmotionLevelDef } from "@/constants";
import { useEffect, useState } from "react";

// モーダルウィンドウ
const defaultModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "400px",
    maxHeight: "80vh",
    overflow: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    padding: "20px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export default function LevelSelectModal(props: any) {
  const [open, setOpen] = useState(false);
  const [registerDisable, setRegisterDisable] = useState(false);
  const { emotion, showModal, closeModal, onClickLevel, onClickRegister } =
    props;

  // Level: Very
  function onClickLevelVery() {
    onClickLevel(EmotionLevelDef.Very);
  }

  // Level: Normal
  function onClickLevelNormal() {
    onClickLevel(EmotionLevelDef.Normal);
  }

  // Level: Little
  function onClickLevelLittle() {
    onClickLevel(EmotionLevelDef.Little);
  }

  function _onClickRegister() {
    setRegisterDisable(true);
    const closeModalTimeout = () => {
      setTimeout(() => {
        closeModal();
        setRegisterDisable(false);
      }, 500);
    };
    if (onClickRegister()) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        closeModalTimeout();
      }, 2000);
    } else {
      setRegisterDisable(false);
    }
  }

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      style={defaultModalStyles}
      contentLabel="Example Modal"
      className={styles["modal-window"]}
    >
      <div className={styles["modal-text-area"]}>
        <p className={styles["modal-timestamp"]}>2023/08/02 12:00</p>
        <p className={styles["modal-pop-txt"]}>今の気持ちはどれですか？</p>
      </div>

      <div className={styles["modal-button-area"]}>
        {emotion?.type == EmotionTypeDef.Normal ? (
          <EmotionButton
            emotionType={emotion.type}
            onClick={onClickLevelNormal}
          />
        ) : (
          <>
            <EmotionButton
              emotionType={emotion.type}
              level={EmotionLevelDef.Very}
              onClick={onClickLevelVery}
            />
            <EmotionButton
              emotionType={emotion.type}
              level={EmotionLevelDef.Normal}
              onClick={onClickLevelNormal}
            />
            <EmotionButton
              emotionType={emotion.type}
              level={EmotionLevelDef.Little}
              onClick={onClickLevelLittle}
            />
          </>
        )}
      </div>
      <Collapse in={open}>
        <Alert className={styles["pop-alert"]}>正常に登録されました。</Alert>
      </Collapse>
      <div className={styles["submit-button"]}>
        <button
          className={styles["register-button"]}
          onClick={_onClickRegister}
          disabled={registerDisable}
        >
          登録
        </button>
        <button
          className={styles["cansel-button"]}
          onClick={closeModal}
          disabled={registerDisable}
        >
          キャンセル
        </button>
      </div>
    </Modal>
  );
}
