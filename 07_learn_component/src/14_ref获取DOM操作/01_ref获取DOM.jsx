import React, { PureComponent, createRef } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {

    }
    this.titileRef = createRef()
    this.ttileEl = null
  }
  getNativeDOM(event) {
    
    // console.log(this.titileRef.current);
    console.log(this.ttileEl);

  }
  render() {
    return (
      <div>
        <h2 >hello world</h2>
        <h2 ref={this.titileRef}>hello world2</h2>
        <h2 ref={el => {this.ttileEl = el}}>hello world3</h2>
        <button onClick={e => this.getNativeDOM()}>获取DOM</button>
      </div>
    )
  }
}

export default App