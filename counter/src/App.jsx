import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let  [counter, setCounter] = useState(15)

  const addValue = () =>{
    console.log("clicked", counter);
    counter = counter + 1
    setCounter(counter)
  }
  const removeValue =() =>{
    if (counter < 1 ) {
      counter == 0;
      setCounter(counter)
    }
    else setCounter(counter - 1)
  }
  return (
    <>
      <h1> this is a counter project in react </h1>
      <h2> Counter values: {counter}</h2>
      <button onClick={addValue}> 
      Add value</button>
      <br/>
      <button onClick={removeValue}
      > remove value</button>
    </>
  )
}

export default App
