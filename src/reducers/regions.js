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

const handleSuccessDeleteRegion = (state, removeId) => ({
  ...state,
  data: state.data.filter(item => item.id !== removeId)
})

const reducer = createReducer({
  [actions.successRegions]: handleSuccessRegions,
  [actions.errorRegions]: handleErrorRegions,
  [actions.successDeleteRegion]: handleSuccessDeleteRegion
}, initialState)

export default reducer
