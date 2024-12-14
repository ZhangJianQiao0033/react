import React, { Component } from 'react'
import AddCounter from './AddCounter'
import SubCounter from './SubCounter'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }
  changeCount(count) {
    this.setState({
      counter: this.state.counter + count
    }) 
  }
  render() {
    const {counter} = this.state
    return (
      <div>
        <div>当前计数:{counter}</div>
        <AddCounter addClick={(count) => this.changeCount(count)}/>
        <SubCounter subClick={(count) => this.changeCount(count)}/>
      </div>
    )
  }
}

export default App