"use client";
import {
  ReactNode,
  createContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import type { IEmotion, IUserEmotions, EmotionDataContextValue } from "@/types";

export const EmotionDataContext = createContext<
  EmotionDataContextValue | undefined
>(undefined);

export const EmotionDataProvider = ({ children }: { children: ReactNode }) => {
  const [emotionDataList, setEmotionDataList] = useState<IUserEmotions[]>([]);

  const addUserEmotion = useCallback(
    (userName: string, emotion: IEmotion) => {
      const newEmotionDataList = [...emotionDataList];
      const userEmotion = Object.values(newEmotionDataList).find(
        (item) => item.userName === userName
      );
      if (userEmotion) {
        // 該当ユーザのデータがある場合はemotionを追加
        userEmotion.emotionData.push(emotion);
      } else {
        // ない場合はユーザとデータ新規追加
        newEmotionDataList.push({
          userName,
          emotionData: [emotion],
        });
      }
      setEmotionDataList(newEmotionDataList);
      console.log("### newEmotionDataList", newEmotionDataList);
    },
    [emotionDataList]
  );

  const value = useMemo(() => {
    return {
      emotionDataList,
      addUserEmotion,
    };
  }, [emotionDataList, addUserEmotion]);

  return (
    <EmotionDataContext.Provider value={value}>
      {children}
    </EmotionDataContext.Provider>
  );
};
