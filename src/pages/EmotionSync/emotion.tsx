import { useState, useContext } from "react";
import { EmotionDataContext } from '@/context/emotionDataContext';
import LevelSelectModal from '@/pages/EmotionSync/levelSelectModal'
import type { IEmotion, EmotionDataContextValue } from '@/types';
import { EmotionsDef } from '@/constants'

export default function Home() {
	const { addUserEmotion } = useContext(EmotionDataContext) as EmotionDataContextValue;
	const [showModal, setShowModal] = useState(false);
	const [emotion, setEmotion] = useState<IEmotion>({
    type: undefined,
    level: undefined,
		timestamp: undefined,
  });

  const handleCloseModal = () => {
    setShowModal(false);
  };

	const setEmotionLevel = (level: number) => {
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
	}

	const setEmotionTypeAndOpenModal = (type: string) => {
		const emotion: IEmotion = {
			type,
			level: undefined,
			timestamp: undefined,
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

	// レベル選択
	function onClickLevel(level: number) {
		setEmotionLevel(level);
	}

	// データ登録
	function onClickRegister() {
		addUserEmotion('demoUser', emotion);
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
				onClickRegister={onClickRegister}
			/>
		</>
	)

}