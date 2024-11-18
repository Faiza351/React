import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 5

  //hooks //auto updation of all variables of same name like counter here...
  let [counter, setCounter] = useState(15)

  const addValue = () => {
   // console.log("value added", Math.random());
   //counter++;
   //setCounter(counter)
   setCounter(prevCounter =>prevCounter+1)
   setCounter(prevCounter =>prevCounter+1)
   setCounter(prevCounter =>prevCounter+1)
   setCounter(prevCounter =>prevCounter+1)
   
   console.log("value added", counter);
   
  }

  const removeValue = () => {
   counter--;
   setCounter(counter)
   console.log("value removed", counter);
  }

  return (
    <>

      <h1>React</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add Value: {counter}</button>
      <br /><br />
      <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
