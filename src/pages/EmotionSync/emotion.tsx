import { useState } from "react";
import Modal from 'react-modal';


type EmotionData = {
	type: string;
	level: number | undefined;
}

const EmotionsDef = {
	Happy: 'Happy',
	Fun: 'Fun',
	Normal: 'Normal',
	Sad: 'Sad',
	Angry: 'Angry',
}

export default function Home() {

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

	const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

	// Happy
	function onClickHappy() {
		const emotion: EmotionData = {
			type: EmotionsDef.Happy,
			level: undefined,
		};
		console.log("### emotion", emotion);
	}

	// Fun
	function onClickFun() {
		const emotion: EmotionData = {
			type: EmotionsDef.Fun,
			level: undefined,
		};
		console.log("### emotion", emotion);
	}

	// Normal
	function onClickNormal() {
		const emotion: EmotionData = {
			type: EmotionsDef.Normal,
			level: undefined,
		};
		console.log("### emotion", emotion);
	}

	// Sad
	function onClickSad() {
		const emotion: EmotionData = {
			type: EmotionsDef.Sad,
			level: undefined,
		};
		console.log("### emotion", emotion);
	}

	// Angry
	function onClickAngry() {
		const emotion: EmotionData = {
			type: EmotionsDef.Angry,
			level: undefined,
		};
		console.log("### emotion", emotion);
	}

	return (
		<>
			<h1>Emotion</h1>
			<p>今のあなたの気持ちに合う感情を<br />下のアイコンから選択してください。</p>

			<div>
				<button onClick={onClickHappy}>Happy</button>
				<button onClick={onClickFun}>Fun</button>
				<button onClick={onClickNormal}>Normal</button>
				<button onClick={onClickSad}>Sad</button>
				<button onClick={onClickAngry}>Angry</button>
			</div>

			<button onClick={handleOpenModal}>Open Modal</button>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={defaultModalStyles}
        contentLabel="Example Modal"
      >
        <h2>This is a modal!</h2>
        <p>Modal content goes here.</p>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
		</>
	)

}