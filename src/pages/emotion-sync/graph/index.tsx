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

const getTypeLevel = (type: string, level: string) => {
  switch (level + type) {
    case "VeryAngry":
      return 0;
    case "NormalAngry":
      return 1;
    case "LittleAngry":
      return 2;
    case "VerySad":
      return 3;
    case "NormalSad":
      return 4;
    case "LittleSad":
      return 5;
    case "NormalNormal": // Normal
      return 6;
    case "LittleFun":
      return 7;
    case "NormalFun":
      return 8;
    case "VeryFun":
      return 9;
    case "LittleHappy":
      return 10;
    case "NormalHappy":
      return 11;
    case "VeryHappy":
      return 12;
    default:
      return "";
  }
};

const formatYAxis = (value: number) => {
  switch (value) {
    case 0:
      return "Very Angry";
    case 1:
      return "Normal Angry";
    case 2:
      return "Little Angry";
    case 3:
      return "Very Sad";
    case 4:
      return "Normal Sad";
    case 5:
      return "Little Sad";
    case 6:
      return "Normal";
    case 7:
      return "Little Fun";
    case 8:
      return "Normal Fun";
    case 9:
      return "Very Fun";
    case 10:
      return "Little Happy";
    case 11:
      return "Normal Happy";
    case 12:
      return "Very Happy";
    default:
      return "";
  }
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

      shapedDataArray.push({
        typeLevel,
        timestamp: formattedDate,
      });
    });
    console.log(shapedDataArray);
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
        <div className={styles["graph-img"]}>
          <p className={styles["name"]}>{loggedUsername}</p>
          {/* グラフ描写 */}
          <ResponsiveContainer minHeight="50vh" aspect={16 / 9}>
            <LineChart
              data={shapedDataArray}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
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
                wrapperStyle={{ lineHeight: "40px" }}
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
      </MainLayout>
    );
  }
};

export default EmotionSync;
