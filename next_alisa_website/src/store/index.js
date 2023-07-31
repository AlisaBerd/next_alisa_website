import {createStore, combineReducers} from "redux";
import {modalReducer} from "./modalReducer";
import {alertsReducer} from "./alertsReducer";
import { configureStore } from '@reduxjs/toolkit'


const rootReducer = combineReducers ({
  img:modalReducer,
  alerts: alertsReducer,
})
// export const store = createStore(rootReducer)
// const preloadedState = window.__PRELOADED_STATE__
export const store =  configureStore({
  reducer: rootReducer,
  // preloadedState,
})
