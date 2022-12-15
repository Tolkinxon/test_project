import React, { useState, useEffect } from 'react'
import './App.css'
import Clicker from './Components/Clicker'

export default function App() {
  const [isClicked, setClick] = useState(false)

  useEffect(()=>{
    console.log('hello world');
  },[])

  return (
    <div className="container">
      <h3>React App</h3>
      <button onClick={() => setClick(!isClicked)} >Toggle Clicker</button>
      {isClicked && <Clicker />}
    </div>
  )
}
