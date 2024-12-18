import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeBanners, changeRecommends, fetchHomeMultidataAction } from '../store/actionCreator'
import axios from 'axios'
export class Category extends PureComponent {
  render() {
    return (
      <div>Category</div>
    )
  }

//   componentDidMount() {
//     axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
//       const banners = res.data.data.banner.list
//       const recommends = res.data.data.recommend.list
//       this.props.changeBanners(banners)
//       this.props.changeRecommends(recommends)
//     })
//   }

  componentDidMount() {
    this.props.fetchHomeMultidata()
  }
}

const mapToDispath = (dispatch) => ({
  fetchHomeMultidata(){
    dispatch(fetchHomeMultidataAction())
  }
})
export default connect(null, mapToDispath)(Category)