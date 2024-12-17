import React, { PureComponent } from 'react'
import { AppWrapper } from './style'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      color: "red"
    }
  }
  render() {
    const {color} = this.state
    return (
      <AppWrapper color={color}>
        <div className="section" >
          <h2 className="title">标题</h2>
          <p className="content">内容</p>
        </div>
        <div className="footer">
          <p>免责声明</p>
          <p>版权声明</p>
        </div>
      </AppWrapper>
    )
  }
}

export default App