import Modal from 'react-modal';

const EmotionsDef = {
	Happy: 'Happy',
	Fun: 'Fun',
	Normal: 'Normal',
	Sad: 'Sad',
	Angry: 'Angry',
}

const EmotionLevelDef = {
	Very: 2,
	Normal: 1,
	Little: 0,
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

export default function LevelSelectModal(props: any) {
	const {
		emotion,
		showModal,
		handleCloseModal,
		onClickLevel,
	} = props;

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

	return (
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
	)

}