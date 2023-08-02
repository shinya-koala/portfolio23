import { useState } from "react";
import Modal from 'react-modal';


type EmotionData = {
	type: string | undefined;
	level: number | undefined;
}

const EmorionLevelDef = {
	Very: 2,
	Normal: 1,
	Little: 0,
}

const EmotionsDef = {
	Happy: 'Happy',
	Fun: 'Fun',
	Normal: 'Normal',
	Sad: 'Sad',
	Angry: 'Angry',
}

// モーダルウィンドウ
const defaultModalStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		maxWidth: '400px',
		maxHeight: '80vh',
		overflow: 'auto',
		borderRadius: '8px',
		boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
		padding: '20px',
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
};

export default function Home() {
	const [showModal, setShowModal] = useState(false);
	const [emotion, setEmotion] = useState<EmotionData | undefined>(undefined);

	console.log('### emotion', emotion);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

	const setEmotionLevel = (level: number) => {
		const updateEmotion = (prevEmotion: EmotionData | undefined) => {
			const emotion: EmotionData = {
				type: prevEmotion?.type,
				level,
			};
			return emotion;
		};
		setEmotion(updateEmotion);
	}

	const setEmotionTypeAndOpenModal = (type: string) => {
		const emotion: EmotionData = {
			type,
			level: undefined,
		};
		setEmotion(emotion);
		setShowModal(true);
	}

	// Happy
	function onClickHappy() {
		setEmotionTypeAndOpenModal(EmotionsDef.Happy);
	}

	// Fun
	function onClickFun() {
		setEmotionTypeAndOpenModal(EmotionsDef.Fun);
	}

	// Normal
	function onClickNormal() {
		setEmotionTypeAndOpenModal(EmotionsDef.Normal);
	}

	// Sad
	function onClickSad() {
		setEmotionTypeAndOpenModal(EmotionsDef.Sad);
	}

	// Angry
	function onClickAngry() {
		setEmotionTypeAndOpenModal(EmotionsDef.Angry);
	}

	// Level Very
	function onClickLevelVery() {
		setEmotionLevel(EmorionLevelDef.Very);
	}

	// Level Normal
	function onClickLevelNormal() {
		setEmotionLevel(EmorionLevelDef.Normal);
	}

	// Level Little
	function onClickLevelLittle() {
		setEmotionLevel(EmorionLevelDef.Little);
	}

	return (
		<>
			<h1>Emotion</h1>
			<p>今のあなたの気持ちに合う感情を<br />下のアイコンから選択してください。</p>

			<div>
				<button onClick={onClickHappy}>{EmotionsDef.Happy}</button>
				<button onClick={onClickFun}>{EmotionsDef.Fun}</button>
				<button onClick={onClickNormal}>{EmotionsDef.Normal}</button>
				<button onClick={onClickSad}>{EmotionsDef.Sad}</button>
				<button onClick={onClickAngry}>{EmotionsDef.Angry}</button>
			</div>

      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={defaultModalStyles}
        contentLabel="Example Modal"
      >
        <p>2023/08/02 12:00</p>
				<p>今の気持ちはどれですか？</p>

				{ emotion?.type == EmotionsDef.Normal ?
					(
						<button onClick={onClickLevelNormal}>{emotion?.type}</button>
					) : (
						<>
							<button onClick={onClickLevelVery}>Very {emotion?.type}</button>
							<button onClick={onClickLevelNormal}>{emotion?.type}</button>
							<button onClick={onClickLevelLittle}>Little {emotion?.type}</button>
						</>
					)
				}
				<button>登録</button>
				<button onClick={handleCloseModal}>キャンセル</button>

      </Modal>
		</>
	)

}