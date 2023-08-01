import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
    <h1>HELLO!</h1>
    <button type='button' onClick={() => {console.log("onClick")}}>Happy</button>
    </>
  )
}
