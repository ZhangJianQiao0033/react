import {applyMiddleware, createStore, compose, combineReducers} from 'redux'
import reducer from './reducer'
import { thunk } from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

export default store