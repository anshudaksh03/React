import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username:"Anshu",
    age: 22
  }
  let newArr = [1,2,3,4]
 
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Hii Tailwind</h1>
    
<Card username="Anshu dakash" btnText="click me"/>
<Card username="Anshu kumar" btnText="Visit me"/>
    </>
  )
}

export default App
