import { combineReducers } from 'redux'
import app from './app'
import account from './account'
import regions from './regions'

export default combineReducers({
  app,
  account,
  regions
})
