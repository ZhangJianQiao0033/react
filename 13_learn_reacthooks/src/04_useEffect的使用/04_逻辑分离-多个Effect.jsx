import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    document.title = counter
  })

  useEffect(() => {
    console.log("监控redux数据");

    return () => {
      console.log("取消监控redux数据");
    }
  })

  useEffect(() => {
    console.log("监控event事件");
  })
  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

export default App