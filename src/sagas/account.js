import { takeLatest, call, put, select } from 'redux-saga/effects'
import * as actions from '../actions/account'
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
      const request = yield call(GET, '/authenticate')

      if (request.data !== '') {
        yield put(actions.successLogin(token))
        yield put(actions.getAccount())
      }
    }
  } catch (e) {
    yield put(actions.errorLogin())
  }
}

function* fileUpload (action) {
  try {
    const formData = new window.FormData()
    for (let item of action.payload) {
      formData.append('file', item)
    }
    const method = () => axios({
      method: 'POST',
      url: `${api}/file-upload`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    yield call(method)
  } catch (e) {
    yield put(actions.errorFileUpload())
  }
}

function* accountRegister () {
  try {
    const account = yield select(state => state.account.account)
    const method = () => axios({
      method: 'POST',
      url: `${api}/register`,
      data: JSON.stringify(account),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const request = yield call(method)
    console.log(request)
  } catch (e) {
    console.log(e)
  }
}

function* forgotPassword (action) {
  try {
    const method = () => axios({
      method: 'POST',
      url: `${api}/account/reset-password/init`,
      data: action.payload,
      headers: {
        'Content-Type': 'text/plain'
      }
    })
    yield call(method, '/account/reset-password/init', action.payload)
    yield put(actions.successForgotPassword())
  } catch (e) {
    yield put(actions.errorForgotPassword())
  }
}

export default function* watcher () {
  yield takeLatest(actions.login, login)
  yield takeLatest(actions.getAccount, getAccount)
  yield takeLatest(actions.isAuthenticate, isAuthenticate)
  yield takeLatest(actions.fileUpload, fileUpload)
  yield takeLatest(actions.accountRegister, accountRegister)
  yield takeLatest(actions.forgotPassword, forgotPassword)
}
