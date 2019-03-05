import { combineReducers } from 'redux'
import app from './app'
import profile from './profile'
import account from './account'

export default combineReducers({
  app,
  profile,
  account
})
