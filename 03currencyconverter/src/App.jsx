import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-white text text-3xl bg-orange-400'>Currency App</h1>
    </>
  )
}

export default App
