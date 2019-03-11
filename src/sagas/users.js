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

function* deleteUser (action) {
  try {
    const method = () => axios.delete(`${api}/extra-users/${action.payload}`)
    yield call(method)
    yield put(actions.successDeleteUser(action.payload))
  } catch (e) {
    console.log('ERROR DELETE_USER', e)
  }
}

export default function* watcher () {
  yield takeLatest(actions.getUsers, getUsers)
  yield takeLatest(actions.deleteUser, deleteUser)
}
