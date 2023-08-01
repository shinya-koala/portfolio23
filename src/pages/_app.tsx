// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Modal from 'react-modal';

Modal.setAppElement('#__next'); // ルート要素のIDを設定

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
