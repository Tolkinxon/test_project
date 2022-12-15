import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)


  function increment() {
    setCount((cou) => cou + 1)
    setCount((coun) => coun + 1)
    }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  )
}
