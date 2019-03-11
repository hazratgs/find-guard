import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/regions'
import axios from 'axios'
const api = API_SERVER // eslint-disable-line

// const POST = (method, data) => axios.post(`${api}${method}`, data)
const GET = (method) => axios.get(`${api}${method}`)

function* getRegions () {
  try {
    const request = yield call(GET, '/regions')
    const regions = request.data
    yield put(actions.successRegions(regions))
  } catch (e) {
    yield put(actions.errorRegions())
  }
}

function* deleteRegion (action) {
  try {
    const method = () => axios.delete(`${api}/regions/${action.payload}`)
    yield call(method)
    yield put(actions.successDeleteRegion(action.payload))
  } catch (e) {
    console.log('ERROR DELETE_REGION', e)
  }
}

export default function* watcher () {
  yield takeLatest(actions.getRegions, getRegions)
  yield takeLatest(actions.deleteRegion, deleteRegion)
}
