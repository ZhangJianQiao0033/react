import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      isbbb: true
    }
  }
  render() {
    return (
      <div>App</div>
    )
  }
}

export default App