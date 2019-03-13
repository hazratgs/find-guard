import { createReducer } from 'redux-act'
import * as actions from '../actions/account'

const account = {
  lastName: '',
  firstName: '',
  middleName: '',
  _middleName: '',
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
}

const initialState = {
  login: false,
  token: null,
  admin: false,
  errorLogin: false,
  register: false,
  successForgotPassword: false,
  errorForgotPassword: false,
  account: account,
  backupAccount: {},
  errorAccount: false,
  editAccount: false,
  errorSaveAccount: false
}

const handleSuccessLogin = (state, payload) => ({
  ...state,
  login: true,
  token: payload.token,
  account: {
    ...account,
    login: payload.login
  },
  errorLogin: false
})

const handleErrorLogin = (state) => ({
  ...state,
  errorLogin: true
})

const handleGetSuccessAccount = (state, payload) => ({
  ...state,
  admin: payload.authorities.includes('ROLE_ADMIN'),
  account: {
    ...state.account,
    ...payload
  },
  errorAccount: false,
  editAccount: true
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

const handleLogout = (state) => ({
  ...state,
  login: false,
  token: null,
  admin: false,
  errorLogin: false,
  register: false,
  successForgotPassword: false,
  errorForgotPassword: false,
  account: account,
  errorAccount: false,
  editAccount: false
})

const handleEditAccount = (state) => ({
  ...state,
  editAccount: true,
  backupAccount: {
    ...state.account
  }
})

const handleErrorSaveAccount = (state) => ({
  ...state,
  errorSaveAccount: true
})

const handleRestoreAccount = (state) => ({
  ...state,
  account: {
    ...state.backupAccount
  },
  backupAccount: {}
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
  [actions.errorForgotPassword]: handleErrorForgotPassword,
  [actions.logout]: handleLogout,
  [actions.editAccount]: handleEditAccount,
  [actions.errorSaveAccount]: handleErrorSaveAccount,
  [actions.restoreAccount]: handleRestoreAccount
}, initialState)

export default reducer
