import React, { PureComponent } from 'react'
import Cart from './pages/Cart'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isLogin: false
    }
  }
  loginClick(e) {
    localStorage.setItem("token", "zjj")
    this.setState({
      isLogin: true
    })
  }
  render() {
    return (
      <div>App
        <Cart/>
        <button onClick={(e) => this.loginClick(e)}>登录</button>
      </div>
    )
  }
}

export default App