import React, { useState } from 'react'

export default function App() {
  const [count, hello] = useState(0)


  function increment() {
    hello((cou) => cou + 1)
    hello((coun) => coun + 1)
    }

  function decrement() {
    hello(count - 1)
  }

  function reset(){
    hello(count * 0)
    }

    

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </>
  )
}
