export type IEmotion = {
	type: string | undefined;
	level: number | undefined;
	timestamp: number | undefined;
};

export type IUserEmotions = {
	userName: string,
	emotionData: IEmotion[],
};

export type EmotionDataContextValue = {
  emotionDataList: IUserEmotions[],
  addUserEmotion: (userName: string, emotion: IEmotion) => void;
};
