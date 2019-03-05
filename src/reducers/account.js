import { createReducer } from 'redux-act'
import * as actions from '../actions/account'

const initialState = {
  login: false,
  token: null,
  errorLogin: false,
  account: {},
  errorAccount: false
}

const handleSuccessLogin = (state, payload) => ({
  ...state,
  login: true,
  token: payload,
  errorLogin: false
})

const handleErrorLogin = (state) => ({
  ...state,
  errorLogin: true
})

const handleGetSuccessAccount = (state, payload) => ({
  ...state,
  account: payload,
  errorAccount: false
})

const handleErrorGetAccount = (state) => ({
  ...state,
  errorAccount: true
})

const reducer = createReducer({
  [actions.successLogin]: handleSuccessLogin,
  [actions.errorLogin]: handleErrorLogin,
  [actions.getSuccessAccount]: handleGetSuccessAccount,
  [actions.errorGetAccount]: handleErrorGetAccount
}, initialState)

export default reducer
