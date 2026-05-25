import MyCount from './components/MyCount'
import MyBtn from './components/MyBtn'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const countUp =() => setCount((prev) => prev + 1 )
  const countDown =() => setCount((prev) => prev - 1 )
  const reset =() => setCount(0)

  return (
    <>
      <h1>новый проект</h1>
      <hr />
      <MyCount count={count}/>
      <hr />
      <MyBtn text='+ 1' myClick = {countUp}/>
      <MyBtn text='- 1' myClick = {countDown}/>
      {!!count && <MyBtn text='Reset' myClick = {reset}/>}
    </>
  );
}


export default App
