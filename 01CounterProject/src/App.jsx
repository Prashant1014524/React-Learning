import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  let[counter,setCounter]=useState(15)
  // let counter=15
  const addValue=()=>{
    console.log("clicked",counter);
    counter=counter+1;
    setCounter(counter)
  }
const removeValue=()=>{
  if(counter>0) setCounter(counter-1)

 else counter=0
}
  return (
    <>
    <h1>Chai aur code</h1>
    <h2>Counter Value:{counter}</h2>
    <button onClick={addValue}>Add Value{counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
     
    </>
  )
}

export default App
