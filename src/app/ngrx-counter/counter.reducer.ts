import { createReducer, on } from "@ngrx/store"
import { chnageMyName, customIncrementValue, decrement, increment, reset } from "./counter-actions"
import { initialState } from "./counter.states"

export const _createStoreReducers = createReducer(
  initialState,
  
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1
    }
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter + 1
    }
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0
    }
  }),
  on(customIncrementValue, (state, actions) => {
    return {
      ...state,
      counter: state.counter + actions.counter
    }
  }),
  on(chnageMyName, (state) => {
    return {
      ...state,
      myNameIs:  'Srikanth'  
    }
  }),
  
)

export function counterReducer(states, actions) {
  return _createStoreReducers(states, actions)
}