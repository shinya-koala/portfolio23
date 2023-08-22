export type IEmotion = {
  type: string;
  level: string;
  timestamp: number;
};

export type IUserEmotions = {
  userName: string;
  emotionData: IEmotion[];
};

export type EmotionDataContextValue = {
  emotionDataList: IUserEmotions[];
  addUserEmotion: (userName: string, emotion: IEmotion) => void;
};
