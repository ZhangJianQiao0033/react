import React, { memo, useMemo } from 'react'

const HelloWorld = memo(function(props) {
  console.log("HelloWorld被渲染~")
  return <h2>Hello World</h2>
})

function calcNumTotal(num) {
  // console.log("calcNumTotal的计算过程被调用~")
  let total = 0
  for (let i = 1; i <= num; i++) {
    total += i
  }
  return total
}


const App = memo(() => {

  const result = useMemo(() => {
    return calcNumTotal(50)
  }, [])

  
  return (
    <div>App</div>
  )
})

export default App