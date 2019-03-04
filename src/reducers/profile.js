import { createReducer } from 'redux-act'
import * as actions from '../actions/profile'

const initialState = {
  login: null,
  profile: {
    lastName: '',
    firstName: '',
    patronymic: '',
    gender: '',
    dateOfBirth: '',
    regionOfResidence: '',
    desiredRegionOfResidence: '',
    phone: '',
    email: '',
    driveryLicense: '',
    professionalArea: '',
    experience: '',
    employment: '',
    schedule: '',
    salary: '',
    about: ''
  }
}

const handleSuccessAuthorization = (state, payload) => ({
  ...state,
  login: payload
})

const handleGetUserProfile = (state, payload) => ({
  ...state,
  profile: payload
})

const handleChangeProfile = (state, payload) => ({
  ...state,
  profile: {
    ...state.profile,
    ...payload
  }
})

const reducer = createReducer({
  [actions.successAuthorization]: handleSuccessAuthorization,
  [actions.getUserProfile]: handleGetUserProfile,
  [actions.changeProfile]: handleChangeProfile
}, initialState)

export default reducer
