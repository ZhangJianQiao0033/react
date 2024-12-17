import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor()  {
    super()
    this.state = {
      titleSize: 30
    }
  }
  btnClick() {
    this.setState({
      titleSize: this.state.titleSize + 2
    })
  }
  render() {
    const {titleSize} = this.state
    return (
      
      <div>
        <button onClick={e => this.btnClick()}>点击</button>
        <h2 style={{color: 'red', fontSize: `${titleSize}px`}}>标题</h2>
      </div>
    )
  }
}

export default App