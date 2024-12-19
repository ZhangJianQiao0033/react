import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { connect } from 'react-redux'

export class App extends PureComponent {
  
  render() {
    const {counter} = this.props
    return (
      <div>
        <h2> APP counter:{counter}</h2>
        <Home/>
        <Profile/>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter.counter
})
export default connect(mapStateToProps)(App)