import axios from "axios"
import * as actionTypes from "./constants"
export const changeCount = (num) => (
  {
    type: actionTypes.Change_count,
    num
  }
)

export const changeBanners = (banners) => (
  {
    type: actionTypes.CHANGE_BANNERS,
    banners
  }
)

export const changeRecommends = (recommends) => (
  {
    type: actionTypes.CHANGE_RECOMMENDS,
    recommends
  }
)

export const fetchHomeMultidataAction = () => {
  return function(dispatch, getstate) {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list

      dispatch(changeBanners(banners))
      dispatch(changeRecommends(recommends))
    })
  }
}