import React, { memo, useRef } from 'react'

const App = memo(() => {
  const titleRef = useRef()
  function fn1() {
    console.log(titleRef.current);
  }
  return (
    <div>
      <h2 ref={titleRef}>hello world</h2>
      <button onClick={fn1}>dianji</button>
    </div>
  )
})

export default App