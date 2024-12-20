import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter : 1
    }
  }
  componentDidMount() {
    document.title = this.state.counter
  }
  componentDidUpdate() {
    document.title = this.state.counter
  }
  render() {
    return (
      <div>
        <h1>counter: {this.state.counter}</h1>
        <button onClick={e => this.setState({counter: this.state.counter + 1})}>+1</button>
      </div>
    )
  }
}

export default App