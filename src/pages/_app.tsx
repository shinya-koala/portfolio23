import "@/styles/globals.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import type { AppProps } from "next/app";
import Modal from "react-modal";
import { EmotionDataProvider } from "@/context/emotionDataContext";

Modal.setAppElement("#__next"); // ルート要素のIDを設定

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EmotionDataProvider>
      <Component {...pageProps} />
    </EmotionDataProvider>
  );
}
