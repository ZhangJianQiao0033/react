import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumber } from '../store/features/counter'
import { fetchHomeMultidataAction } from '../store/features/home'
export class Home extends PureComponent {
  
  btnClick(num) {
    this.props.addCounter(num)
  }
  componentDidMount() {
    
    this.props.fetchHomeMultidata()
    console.log("object");
  }
  render() {
    const {counter} = this.props
    return (
      <div>
        <h2> HOME counter:{counter}</h2>
        <button onClick={e => this.btnClick(1)}>+1</button>
        <button onClick={e => this.btnClick(5)}>+5</button>
        <button onClick={e => this.btnClick(18)}>+18</button>
        </div>
    )
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter.counter
})
const mapDispathcToProps = (dispatch) => ({
  addCounter(num) {
    dispatch(addNumber(num))
  },
  fetchHomeMultidata() {
    dispatch(fetchHomeMultidataAction())
  }
})

export default connect(mapStateToProps, mapDispathcToProps)(Home)