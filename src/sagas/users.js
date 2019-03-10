import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/users'
import axios from 'axios'
const api = API_SERVER // eslint-disable-line

function* getUsers () {
  try {
    const method = () => axios.get(`${api}/extra-users`)
    const request = yield call(method)
    const users = request.data
    yield put(actions.successGetUsers(users))
  } catch (e) {
    yield put(actions.errorGetUsers())
  }
}

export default function* watcher () {
  yield takeLatest(actions.getUsers, getUsers)
}
