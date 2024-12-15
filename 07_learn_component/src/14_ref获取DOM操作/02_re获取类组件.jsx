import React, { PureComponent, createRef } from 'react'

class HelloWorld extends PureComponent{
  test() {
    console.log("test------")
  }
  render() {
    return (
      <h1>hello world</h1>
    )
  }
}


export class App extends PureComponent {
  constructor() {
    super()
    this.state = {

    }
    this.titileRef = createRef()
    this.ttileEl = null
    this.HelloWorldRef = createRef()
  }
  getNativeDOM(event) {
    
    // console.log(this.titileRef.current);
    console.log(this.HelloWorldRef.current);

  }
  render() {
    return (
      <div>
        <HelloWorld ref={this.HelloWorldRef}/>
        <button onClick={e => this.getNativeDOM()}>获取DOM</button>
      </div>
    )
  }
}

export default App