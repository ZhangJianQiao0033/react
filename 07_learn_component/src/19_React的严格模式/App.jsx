import React, { PureComponent, StrictMode } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <StrictMode>
          <Profile/>
        </StrictMode>

      </div>
    )
  }
}

export default App