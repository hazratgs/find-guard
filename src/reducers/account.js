import { createReducer } from 'redux-act'
import * as actions from '../actions/account'

const initialState = {
  login: false,
  token: null,
  admin: true,
  errorLogin: false,
  register: false,
  successForgotPassword: false,
  errorForgotPassword: false,
  account: {
    lastName: '',
    firstName: '',
    middleName: '',
    sex: '',
    birthDate: '',
    regionId: '',
    workRegionId: '',
    phone: '',
    login: '',
    email: '',
    driverLicense: false,
    driverLicenseNumber: '',
    gunLicense: false,
    gunLicenseNumber: '',
    professionalArea: '',
    experienceYears: '',
    employmentType: '',
    workSchedule: '',
    desiredSalary: '',
    comment: '',
    files: []
  },
  errorAccount: false
}

const handleSuccessLogin = (state, payload) => ({
  ...state,
  login: true,
  token: payload,
  errorLogin: false
})

const handleErrorLogin = (state) => ({
  ...state,
  errorLogin: true
})

const handleGetSuccessAccount = (state, payload) => ({
  ...state,
  admin: payload.authorities.includes('ADMIN'),
  account: {
    ...state.account,
    ...payload
  },
  errorAccount: false
})

const handleErrorGetAccount = (state) => ({
  ...state,
  errorAccount: true
})

const handleChangeAccount = (state, payload) => ({
  ...state,
  account: {
    ...state.account,
    ...payload
  }
})

const handleAccountRegister = (state) => ({
  ...state,
  register: true
})

const handleCloseNotifRegister = (state) => ({
  ...state,
  register: false
})

const handleSuccessForgotPassword = (state) => ({
  ...state,
  successForgotPassword: true,
  errorForgotPassword: false
})

const handleErrorForgotPassword = (state) => ({
  ...state,
  errorForgotPassword: true,
  successForgotPassword: false
})

const reducer = createReducer({
  [actions.successLogin]: handleSuccessLogin,
  [actions.errorLogin]: handleErrorLogin,
  [actions.getSuccessAccount]: handleGetSuccessAccount,
  [actions.errorGetAccount]: handleErrorGetAccount,
  [actions.changeAccount]: handleChangeAccount,
  [actions.accountRegister]: handleAccountRegister,
  [actions.closeNotifRegister]: handleCloseNotifRegister,
  [actions.successForgotPassword]: handleSuccessForgotPassword,
  [actions.errorForgotPassword]: handleErrorForgotPassword
}, initialState)

export default reducer
