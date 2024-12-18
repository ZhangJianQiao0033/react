import React, { PureComponent } from 'react'
import Profile from './pages/Profile'
import Home from './pages/Home'
import store from './store'
import About from './pages/About'
import Category from './pages/Category'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({
        counter: state.counter
      })
    })
  }
  render() {
    const {counter} = this.state
    return (
      <div>
        
        <div className="header">
          <h2>当前计数: {counter}</h2>
        </div>
        <Home/>
        <Profile/>
        <About/>
        <Category/>
      </div>
      
    )
  }
}

export default App