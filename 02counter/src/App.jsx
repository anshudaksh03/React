import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
//let counter = 15
const addValue = () =>{
  //counter = counter + 1
 //setCounter(counter)
 setCounter(counter + 1)
  // console.log("Value is added", counter);

   
}

const removeValue = () => {
  if(counter > 0) // ab iss function sa -1 , -2 tak bhe tak n jaye ga kyu ki  hum na aise contion laga di hai agar is condition ko hata danmh TO - 1 SA ANAGA TAK CHJALA AJAYE GA
setCounter(counter - 1)
}

  return (
    <>
      
      <h1> Chai aur react</h1>
      <h2>counter value:{counter} </h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter} </button>
      <p>footer:{counter}</p>
     
      
    </>
  )
}

export default App
