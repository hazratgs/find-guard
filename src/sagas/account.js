import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/account'
import * as regionsActions from '../actions/regions'
import axios from 'axios'
import cookies from 'js-cookie'
const api = API_SERVER // eslint-disable-line

const POST = (method, data) => axios.post(`${api}${method}`, data)
const GET = (method) => axios.get(`${api}${method}`)

function* login (action) {
  try {
    const request = yield call(POST, '/authenticate', action.payload)
    const token = request.data.id_token

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    cookies.set('token', token, { expires: 7, path: '/' })
    yield put(actions.successLogin(token))
    yield put(actions.getAccount())
    yield put(regionsActions.getRegions())
  } catch (e) {
    yield put(actions.errorLogin())
  }
}

function* getAccount () {
  try {
    const request = yield call(GET, '/account')
    const account = request.data
    yield put(actions.getSuccessAccount(account))
  } catch (e) {
    yield put(actions.errorGetAccount())
  }
}

function* isAuthenticate () {
  try {
    const token = cookies.get('token')
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      const request = yield GET('/authenticate')

      if (request.data !== '') {
        yield put(actions.successLogin(token))
        yield put(actions.getAccount())
        yield put(regionsActions.getRegions())
      }
    }
  } catch (e) {
    yield put(actions.errorLogin())
  }
}

export default function* watcher () {
  yield takeLatest(actions.login, login)
  yield takeLatest(actions.getAccount, getAccount)
  yield takeLatest(actions.isAuthenticate, isAuthenticate)
}
