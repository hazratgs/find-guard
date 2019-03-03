import { all, fork } from 'redux-saga/effects'

export default function* rootSaga () {
  return yield all([].map(fork))
}
