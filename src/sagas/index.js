import { all, fork } from 'redux-saga/effects'
import account from './account'
import regions from './regions'
import users from './users'

export default function* rootSaga () {
  return yield all([
    account,
    regions,
    users
  ].map(fork))
}
