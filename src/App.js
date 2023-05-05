import React, { useState, useEffect, useRef} from 'react'
import './App.css'
import Clicker from './Components/Clicker'

export default function App() {
  // const [isClicked, setClick] = useState(false)

// useEffect(() => {console.log('did mount')
//    return () => console.log('bye bye'); 
//   },[isClicked])


  // return (
  //   <div className="container">
  //     <h3>Hello world</h3>
  //     <button onClick={() => setClick(!isClicked)} >Toggle Clicker</button>
  //     {isClicked && <Clicker />}
  //   </div>
  // )




//*****************************************************************************/
//SECOND CODE ABOUT INPUTS
//*****************************************************************************/

const currentRef = useRef(null)

// const changeRef = () => {
//   currentRef.current.focus()
// }

const [valuee ,setValuee] = useState(' ')

useEffect(() => {
  currentRef.current.focus()
},[])


  return (
  <div className='container'>
      <h1>hello world</h1>
      <input 
      type='text' 
      placeholder='input your name' 
      ref={currentRef}/>
      <button>Clear</button>
  </div>
  )
}
