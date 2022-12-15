import React, { useState, useEffect } from 'react'
import './App.css'


export default function App() {

    const [isClicked, setClick] = useState(false)

    return (
        <div className='container'>
            <h3>React App</h3>
          
            <button className='toggle'>Toggle Clicker</button>
        </div>
  )
}
