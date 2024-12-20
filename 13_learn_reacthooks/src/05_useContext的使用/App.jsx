import React, { memo, useContext } from 'react'
import { ThemeContext, UserContext } from './context'

const App = memo(() => {
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)
  return (
    <div>
      {user.name}-{user.age}
      <h2 style={{color: theme.color, fontSize: theme.fontSize}}>test</h2>
    </div>
    
    
  )
})

export default App