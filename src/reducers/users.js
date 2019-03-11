import { createReducer } from 'redux-act'
import * as actions from '../actions/users'

const initialState = {
  data: [],
  error: false
}

const handleSuccessGetUsers = (state, payload) => ({
  ...state,
  data: payload,
  error: false
})

const handleErrorGetUsers = (state) => ({
  ...state,
  error: true
})

const handleSuccessDeleteUser = (state, removeId) => ({
  ...state,
  data: state.data.filter(item => item.id !== removeId)
})

const reducer = createReducer({
  [actions.successGetUsers]: handleSuccessGetUsers,
  [actions.errorGetUsers]: handleErrorGetUsers,
  [actions.successDeleteUser]: handleSuccessDeleteUser
}, initialState)

export default reducer
