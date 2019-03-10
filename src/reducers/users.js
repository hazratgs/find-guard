import { createReducer } from 'redux-act'
import * as actions from '../actions/users'

const initialState = {
  users: [],
  error: false
}

const handleSuccessGetUsers = (state, payload) => ({
  ...state,
  users: payload,
  error: false
})

const handleErrorGetUsers = (state) => ({
  ...state,
  error: true
})

const reducer = createReducer({
  [actions.successGetUsers]: handleSuccessGetUsers,
  [actions.errorGetUsers]: handleErrorGetUsers
}, initialState)

export default reducer
