import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeCount } from '../store/actionCreator'

export class About extends PureComponent {

  changeCount(num) {
    this.props.changeCount(num)
  }
  render() {
    const {recommends, banners} = this.props
    return (
      <div>
        <h2>about 当前计数: {this.props.counter}</h2>
        <button onClick={e => this.changeCount(5)}>+5</button>
        <button onClick={e => this.changeCount(-5)}>-5</button>

        <div className="banner">
          <h2>轮播图数据</h2>
          <ul>
            {banners.map((item, index) => {
              return (
                <li key={index}>{item.title}</li>
              )
            })}
          </ul>
        </div>

        <div className="recommend">
          <h2>轮播图数据</h2>
          <ul>
            {recommends.map((item, index) => {
              return (
                <li key={index}>{item.title}</li>
              )
            })}
          </ul>
        </div>
      </div>
     
    )
  }
}

// function mapStoreToProps(state) {
//   return {
//     counter: state.counter
//   }
// }
const mapStoreToProps = (state) => ({
  counter: state.counter,
  banners: state.banners,
  recommends: state.recommends
})

const mapDispatchToProps = (dispatch) => ({
  changeCount(num) {
    dispatch(changeCount(num))
  }
})
export default connect(mapStoreToProps, mapDispatchToProps)(About)