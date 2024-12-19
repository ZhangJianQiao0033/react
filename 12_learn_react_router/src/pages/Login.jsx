import React, { PureComponent } from 'react'
import { Navigate } from 'react-router-dom'

export class Login extends PureComponent {
  constructor() {
    super()
    this.state = {
      isLogin: false
    }
  }
  login() {
    this.setState({
      isLogin: true
    })
  }
  render() {
    const {isLogin} = this.state
    return (
      <div>
        <h1>login page</h1>
        {isLogin ? <Navigate to="/home" /> : <button onClick={e => this.login()}>登录</button>}
      </div>
    )
  }
}

export default Login