import apps from '@/styles/Application.module.scss'

export default function EmotionSync() {
  return (
    <>
    	<h1>ログイン</h1>
			<p>アカウントにログインしてください。</p>
			<input type="text" placeholder='メールアドレス'/>
			<input type="text" placeholder='パスワード'/>
			<button>ログイン</button>

			<a href="./emotion">ゲストでログイン</a>
    </>
  )
}
