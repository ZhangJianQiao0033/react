import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("监控事件1");
    return () => {
      console.log("取消监控事件1");
    }
  })

  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

export default App