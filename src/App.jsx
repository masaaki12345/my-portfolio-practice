import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='text-gray-700 border-b border-gray-200'>
      <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
        <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
          <span className='text-xl ml-3'>NisshoCode</span>
          </a>
          <nav className=' md:ml-auto text-base'>
            <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
            <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
            <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
            <a href="#blog" className='mr-5 hover:text-blue-400 duration-300'>Blog</a>
          </nav>
      </div>
    </header>
    <section className='text-gray-700 ' id='home'>
      <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
        <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
          <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-8 ' >NisshoCode<br />
          My Portfolio Website</h1>
          <p className='text-lg mb-8 leading-relaxed'>現在、webエンジニアとしてデビューしたてほやほやです。今勉強している言語は、HTML,CSS,JavaScript,TypeScript,
            PHP,SQL,Reactなどのweb全般に加えPythonも触っています。恐ろしいスピードで成長していき、無敵のエンジニアになるのが目標です。そんな僕が作ったものを公開しているので、ありがたく享受することを許可します。
          </p>
          <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact Me</button>
        </div>
        <div className='md:w-1/2 lg:max-w-lg w-5/6'>
          <img src="./img/myPicture.png" alt="" />
        </div>
      </div>
    </section>
    <section className='text-gray-700 border-t border-gray-200'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl  mb-4 font-medium text-gray-900'>About Me</h1>
          <p className='pb-10 px-20 text-lg'>これまではIT業界ではなく、児童福祉の分野に身を置いておりましたが、満を持して２０２５年より、エンジニアの世界に彗星のごとく馳せ参じました。
            webサイト作りやwebapp作りにおけるUI/UXの向上に意識を向けた、革新的なデザイン・アイデアを打ち出して、現エンジニアの皆様方の生活をAIと一緒に脅かしてまいります。
          </p>
          <p className='text-lg'>以下に個人としての成果物を公開しています。これから随時更新してまいりますので、１日に３回はチェックしてその恩寵をありがたく賜り、日の始まりと終わりに聖地の方角へ祈りを捧げると良いでしょう。

          </p>
        </div>
        <div className='flex flex-wrap'>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3 5.5485L10.1954 4.58174V11.6106L3.00672 11.6651L3 5.5485ZM10.1954 12.3909V19.4957L3.00571 18.5105L3.0053 12.3909H10.1954ZM11.1134 4.45599L20.9977 3V11.5334L11.1134 11.6106V4.45599ZM21 12.505L20.9977 21L11.1134 19.6466V12.505H21Z"
    fill="currentColor"
  />
</svg>
                </div>
                <h2 className='ml-4 text-lg font-medium '>SNS Chat App</h2>
              </div>
              <p>ReactとJavaScriptで投稿機能付きのChatアプリ。使用はReact,JavaScript,html,css,firebase,AWS,ログイン、ログアウト認証機能
                メッセージ投稿機能、検索機能お気に入り登録機能を実装しています。
              </p>
              <a href="#" className='mt-3 text-green-500 items-center'>もっと見る</a>
            </div>
          </div>
                    <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3 5.5485L10.1954 4.58174V11.6106L3.00672 11.6651L3 5.5485ZM10.1954 12.3909V19.4957L3.00571 18.5105L3.0053 12.3909H10.1954ZM11.1134 4.45599L20.9977 3V11.5334L11.1134 11.6106V4.45599ZM21 12.505L20.9977 21L11.1134 19.6466V12.505H21Z"
    fill="currentColor"
  />
</svg>
                </div>
                <h2 className='ml-4 text-lg font-medium '>SNS Chat App</h2>
              </div>
              <p>ReactとJavaScriptで投稿機能付きのChatアプリ。使用はReact,JavaScript,html,css,firebase,AWS,ログイン、ログアウト認証機能
                メッセージ投稿機能、検索機能お気に入り登録機能を実装しています。
              </p>
              <a href="#" className='mt-3 text-green-500 items-center'>もっと見る</a>
            </div>
          </div>
                    <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3 5.5485L10.1954 4.58174V11.6106L3.00672 11.6651L3 5.5485ZM10.1954 12.3909V19.4957L3.00571 18.5105L3.0053 12.3909H10.1954ZM11.1134 4.45599L20.9977 3V11.5334L11.1134 11.6106V4.45599ZM21 12.505L20.9977 21L11.1134 19.6466V12.505H21Z"
    fill="currentColor"
  />
</svg>
                </div>
                <h2 className='ml-4 text-lg font-medium '>SNS Chat App</h2>
              </div>
              <p>ReactとJavaScriptで投稿機能付きのChatアプリ。使用はReact,JavaScript,html,css,firebase,AWS,ログイン、ログアウト認証機能
                メッセージ投稿機能、検索機能お気に入り登録機能を実装しています。
              </p>
              <a href="#" className='mt-3 text-green-500 items-center'>もっと見る</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='text-gray-700 border-t border-gray-200'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
          <img src="./img/pc.jpg" alt="" className='rounded'/>
        </div>
        <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
          <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>My Skills</h1>
          <div>
            <h2 className='mt-3 font-bold'>HTML</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"100%"}}>100%</div>
            </div>
            <h2 className='mt-3 font-bold'>CSS</h2>
            <div className='shadow bg-purple-100 mt-2 w-full'>
              <div className='bg-purple-600 text-xs leading-none py-1 text-center text-white' style={{width:"99%"}}>99%</div>
            </div>
            <h2 className='mt-3 font-bold'>REACT</h2>
            <div className='shadow bg-blue-100 mt-2 w-full'>
              <div className='bg-blue-600 text-xs leading-none py-1 text-center text-white' style={{width:"70%"}}>70%</div>
            </div>
            <h2 className='mt-3 font-bold'>Python</h2>
            <div className='shadow bg-yellow-100 mt-2 w-full'>
              <div className='bg-yellow-600 text-xs leading-none py-1 text-center text-white' style={{width:"2%"}}>2%</div>
            </div>
            <h2 className='mt-3 font-bold'>MUSCLE POWER</h2>
            <div className='shadow bg-red-100 mt-2 w-full'>
              <div className='bg-red-600 text-xs leading-none py-1 text-center text-white' style={{width:"120%"}}>120%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
