export type IEmotion = {
  type: string;
  level: string;
  timestamp: number;
};

export type EmotionDataContextValue = {
  emotionList: IEmotion[];
  addUserEmotion: (emotion: IEmotion) => void;
};
