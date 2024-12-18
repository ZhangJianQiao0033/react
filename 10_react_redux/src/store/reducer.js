import * as actionTypes from "./constants"
const initialStore = {
  counter: 100,
  banners: [],
  recommends: []
}

function reducer(state = initialStore, action) {
  switch(action.type) {
    case actionTypes.Change_count: 
      return { ...state, counter: state.counter + action.num }
    case actionTypes.CHANGE_BANNERS: 
      return {...state, banners: action.banners}
    case actionTypes.CHANGE_RECOMMENDS: 
      return {...state, recommends: action.recommends}

    default: return state
  }
}
export default reducer