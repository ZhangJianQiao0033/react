import React, { memo } from 'react'
import CounterHook from './CounterHook'

const App = memo(() => {
  return (
    <div>
      <CounterHook />
    </div>
  )
})

export default App