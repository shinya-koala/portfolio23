import React, { useContext } from "react";
import { format } from "date-fns";
import {
  Legend,
  ReferenceLine,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  ResponsiveContainer,
} from "recharts";
import styles from "./graph.module.scss";
import Link from "next/link";
import { MainLayout } from "@/layout/MainLayout";
import type { EmotionDataContextValue } from "@/types";
import { EmotionDataContext } from "@/contexts/emotionDataContext";
import { useAuth } from "@/contexts/AuthContext";

const items = [
  {
    typeLevel: "VeryAngry",
    label: "Very Angry",
  },
  {
    typeLevel: "NormalAngry",
    label: "Normal Angry",
  },
  {
    typeLevel: "LittleAngry",
    label: "Little Angry",
  },
  {
    typeLevel: "VerySad",
    label: "Very Sad",
  },
  {
    typeLevel: "NormalSad",
    label: "Normal Sad",
  },
  {
    typeLevel: "LittleSad",
    label: "Little Sad",
  },
  {
    typeLevel: "NormalNormal", // Normal
    label: "Normal",
  },
  {
    typeLevel: "LittleFun",
    label: "Little Fun",
  },
  {
    typeLevel: "NormalFun",
    label: "Normal Fun",
  },
  {
    typeLevel: "VeryFun",
    label: "Very Fun",
  },
  {
    typeLevel: "LittleHappy",
    label: "Little Happy",
  },
  {
    typeLevel: "NormalHappy",
    label: "Normal Happy",
  },
  {
    typeLevel: "VeryHappy",
    label: "Very Happy",
  },
];

const getTypeLevel = (type: string, level: string) => {
  const typeLevel = level + type;
  const index = items.findIndex((item) => item.typeLevel === typeLevel);
  if (index === -1) return;
  return index;
};

const formatYAxis = (value: number) => {
  return items[value]?.label ?? "";
};

const EmotionSync = () => {
  const { loggedUsername } = useAuth();
  const { emotionList } = useContext(
    EmotionDataContext
  ) as EmotionDataContextValue;

  const shapedDataArray: any[] = [];

  if (loggedUsername !== "") {
    emotionList.forEach((emotion) => {
      const { type, level, timestamp } = emotion;
      // 成形処理
      const jstTimestamp = timestamp + 1000 * 60 * 60 * 9;
      const date = new Date(jstTimestamp);
      const formattedDate = format(date, "MM/dd HH:mm");
      let typeLevel = getTypeLevel(type, level);
      if (typeLevel !== undefined) {
        shapedDataArray.push({
          typeLevel,
          timestamp: formattedDate,
        });
      }
    });
  }

  if (!shapedDataArray.length) {
    return (
      <MainLayout>
        <section className={styles["graph"]}>
          <div className={styles["-postionCenter"]}>
            <p className={styles["err-log"]}>
              データがありません。
              <Link
                href="../../emotion-sync/emotion"
                className={styles["-borderBottom"]}
              >
                Emotion
              </Link>
              にてデータを追加してください。
            </p>
          </div>
        </section>
      </MainLayout>
    );
  } else {
    return (
      <MainLayout>
        <div className={styles["chart-container"]}>
          <div className={styles["chart-wrapper"]}>
            {/* グラフ描写 */}
            <p className={styles["name"]}>{loggedUsername}</p>
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <LineChart data={shapedDataArray} margin={{ left: 8 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="timestamp"
                  tick={{ fontSize: "1.7rem" }}
                  stroke="#FFFFFF"
                />
                <YAxis
                  dataKey="typeLevel"
                  tickFormatter={formatYAxis}
                  ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                  tick={{ fontSize: "1.2rem" }}
                  stroke="#FFFFFF"
                  interval={0}
                />
                <Tooltip />
                <Legend
                  verticalAlign="top"
                  wrapperStyle={{ lineHeight: "24px" }}
                />
                <ReferenceLine y={0} stroke="#000" />
                <Brush
                  className="TimeLineChart-brush"
                  dataKey="timestamp"
                  stroke="#00FF00"
                />
                <Line dataKey="typeLevel" fill="#8884d8" stroke="#00FF00" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </MainLayout>
    );
  }
};

export default EmotionSync;
