import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { subNumber } from '../store/features/counter'

export class Profile extends PureComponent {
  btnClick(num) {
    this.props.subCounter(num)
  }
  render() {
    const {counter, banners, recommends} = this.props
    return (
      <div>
        <h2> Profile counter:{counter}</h2>
        <button onClick={e => this.btnClick(-1)}>-1</button>
        <button onClick={e => this.btnClick(-5)}>-5</button>
        <button onClick={e => this.btnClick(-18)}>-18</button>

        <div>
          <ul>
            {
              banners.map((item, index) => {
                return (
                  <li key={index}>{item.title}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners
})
const mapDispatchToProps = (dispatch) => ({
  subCounter(num) {
    dispatch(subNumber(num))
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile)