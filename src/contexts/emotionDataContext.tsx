"use client";
import {
  ReactNode,
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import type { IEmotion, EmotionDataContextValue } from "@/types";
import { useAuth } from "@/contexts/AuthContext";

export const EmotionDataContext = createContext<
  EmotionDataContextValue | undefined
>(undefined);

export const EmotionDataProvider = ({ children }: { children: ReactNode }) => {
  const { loggedUsername } = useAuth();
  const [emotionList, setEmotionList] = useState<IEmotion[]>([]);

  // DB取得リクエスト
  const fetchUserEmotion = useCallback(async (): Promise<IEmotion[]> => {
    if (!loggedUsername) return [];
    // const query = `userName=${loggedUsername}`;
    // const response = await fetch(`/api/JsonDB?${query}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    const response = await fetch(`/data/${loggedUsername}.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return [];
    }
    const data: IEmotion[] = await response.json();
    return data;
  }, [loggedUsername]);

  /*
  // DB書き込みリクエスト
  const writeUserEmotion = useCallback(
    async (emotionList: IEmotion[]) => {
      if (!emotionList.length || !loggedUsername) return;
      await fetch("/api/JsonDB", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: loggedUsername,
          data: emotionList,
        }),
      });
    },
    [loggedUsername]
  );
  */

  // Emotion追加
  const addUserEmotion = useCallback(
    async (emotion: IEmotion) => {
      const nextEmotionList = [...emotionList];
      nextEmotionList.push(emotion);
      setEmotionList(nextEmotionList);
    },
    [emotionList]
  );

  /*
  // DB更新
  useEffect(() => {
    writeUserEmotion(emotionList);
  }, [emotionList]); // eslint-disable-line react-hooks/exhaustive-deps
  */

  // emotionList配信用キャッシュ更新
  useEffect(() => {
    (async () => {
      if (!loggedUsername) return;
      const emotionList = await fetchUserEmotion();
      setEmotionList(emotionList);
    })();
  }, [fetchUserEmotion, loggedUsername]);

  const value = useMemo(() => {
    return {
      emotionList,
      addUserEmotion,
    };
  }, [emotionList, addUserEmotion]);

  return (
    <EmotionDataContext.Provider value={value}>
      {children}
    </EmotionDataContext.Provider>
  );
};
