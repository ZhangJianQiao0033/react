import React, { memo, useState, useCallback, useRef } from 'react'
const YHHome = memo((pros) => {
  const {increment} = pros
  console.log("YH被渲染");
  return (
    <div>
      <button onClick={increment}>+1</button>
    </div>
  )
})
const App = memo(() => {
  
  
  const [count, setCount] = useState(0)
  // const countRef = useRef()
  // countRef.current = count
  const countRef = useRef()
  countRef.current = count
  const [message, setMessage] = useState("hello")
  const increment = useCallback(function() {
    console.log("increment")
    setCount(countRef.current + 1)
  }, [])
  return (
    <div>
      <h2>计数: {count}</h2>
      <button onClick={increment}>+1</button>
      <YHHome increment= {increment}/>
    </div>
  )
})

export default App