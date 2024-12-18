import React, { PureComponent } from 'react'
import store from '../store'
import { changeCount } from '../store/actionCreator'

export class Home extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: store.getState().counter
    }
  }
  changeCount(num) {
    store.dispatch(changeCount(num))
  }
  render() {
    const {counter} = this.state
    return (
      <div>
        
        <div className="header">
        <h2>当前计数: {counter}</h2>
        <button onClick={e => this.changeCount(1)}>+1</button>
        <button onClick={e => this.changeCount(5)}>+5</button>
        <button onClick={e => this.changeCount(10)}>+10</button>
        </div>
      </div>
      
    )
  }
}

export default Home