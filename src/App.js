import React, { useState, useEffect } from 'react'
import './App.css'
import Clicker from './Components/Clicker'

export default function App() {
  const [isClicked, setClick] = useState(false)

useEffect(() => {console.log('did mount')
   return () => console.log('bye bye'); 
  },[isClicked])


  return (
    <div className="container">
      <h3>Hello world</h3>
      <button onClick={() => setClick(!isClicked)} >Toggle Clicker</button>
      {isClicked && <Clicker />}
    </div>
  )
}
