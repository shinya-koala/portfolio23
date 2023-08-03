import { useState } from "react";
import LevelSelectModal from '@/pages/EmotionSync/levelSelectModal'


type EmotionData = {
	type: string | undefined;
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
	const [showModal, setShowModal] = useState(false);
	const [emotion, setEmotion] = useState<EmotionData>({
    type: undefined,
    level: undefined,
  });

  const handleCloseModal = () => {
    setShowModal(false);
  };

	const setEmotionLevel = (level: number) => {
		const updateEmotion = (prevEmotion: EmotionData | undefined) => {
			const emotion: EmotionData = {
				type: prevEmotion?.type,
				level,
			};
			console.log(emotion);
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

	function onClickLevel(level: number) {
		setEmotionLevel(level);
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

			<LevelSelectModal
				emotion={emotion}
				showModal={showModal}
				handleCloseModal={handleCloseModal}
				onClickLevel={onClickLevel}
			/>
		</>
	)

}