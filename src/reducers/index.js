import { combineReducers } from 'redux'
import app from './app'
import account from './account'
import regions from './regions'
import users from './users'

export default combineReducers({
  app,
  account,
  regions,
  users
})
