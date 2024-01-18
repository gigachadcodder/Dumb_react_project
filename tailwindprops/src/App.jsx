import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>

    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> Tailwind test</h1>
    <div class="relative h-[400px] w-[300px] rounded-md rounded-md"> </div>
    <Card username="kingjames" btntext = "click me" />
    <Card username="newtab" btntext = "go further" />
    </>
  )
}

export default App
