import { createReducer } from 'redux-act'
import * as actions from '../actions/regions'

const initialState = {
  data: [],
  error: false
}

const handleSuccessRegions = (state, payload) => ({
  ...state,
  data: payload
})

const handleErrorRegions = (state) => ({
  ...state,
  error: true
})

const reducer = createReducer({
  [actions.successRegions]: handleSuccessRegions,
  [actions.errorRegions]: handleErrorRegions
}, initialState)

export default reducer
