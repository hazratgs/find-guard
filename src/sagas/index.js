import { all, fork } from 'redux-saga/effects'
import account from './account'
import regions from './regions'

export default function* rootSaga () {
  return yield all([
    account,
    regions
  ].map(fork))
}
