import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(0)
  const [message, setMessage] = useState("zzz")
  useEffect(() => {
    document.title = counter
    console.log("title");
  }, [counter])

  useEffect(() => {
    console.log("监控redux数据");

    return () => {
      console.log("取消监控redux数据");
    }
  },[])

  useEffect(() => {
    console.log("监控event事件");
  },[])

  useEffect(() => {
    console.log("网络请求拿去数据");
  },[])
  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <h1>counter: {message}</h1>
      <button onClick={e => setMessage("JJJ")}>+1</button>
    </div>
  )
})

export default App