import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchHomeMultidataAction = createAsyncThunk(
  "fetch/homemultidata", 
  async (extraInfo, {dispatch, getState}) => {
    const res = await axios.get("http://123.207.32.32:8000/home/multidata")
    const banners = res.data.data.banner.list
    dispatch(changeBanners(banners))
    return res.data
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
    recommends: []
  },
  reducers: {
    changeBanners(state, {payload}) {
      state.banners = payload
    },
    changeRecommends(state, {payload}) {
      state.recommends = payload
    }
  },

  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeMultidataAction.fulfilled, (state, {payload}) => {
  //     state.banners = payload.data.banner.list
  //     state.recommends = payload.data.recommend.list
      
  //   })
  // }
})
export const { changeBanners, changeRecommends } = homeSlice.actions
export default homeSlice.reducer