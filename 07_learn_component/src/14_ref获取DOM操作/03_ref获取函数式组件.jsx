import React, { PureComponent, createRef, forwardRef } from 'react'

const HelloWorld = forwardRef(function(props, ref) {
  return (
    <div>
      <h2 ref={ref}>hello world2</h2>
    </div>
  )
}) 


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