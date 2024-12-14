import React, { Component } from 'react'
import HelloWorld from './HelloWorld'

export class App extends Component {
  constructor() {
    super()

    this.state= {
      isShow: true
    }
  }
  switchisShow() {
    this.setState({ isShow: !this.state.isShow })
  }
  render() {
    const { isShow } = this.state
    return (
      <div>
        <button  onClick={e => this.switchisShow()}>切换</button>
        {  isShow && <HelloWorld/> }
      </div>
    )
  }

}

export default App