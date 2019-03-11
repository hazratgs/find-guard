import { createAction } from 'redux-act'
import {
  LOGIN,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  GET_ACCOUNT,
  GET_SUCCESS_ACCOUNT,
  ERROR_GET_ACCOUNT,
  IS_AUTHENTICATE,
  CHANGE_ACСOUNT,
  FILE_UPLOAD,
  ERROR_FILE_UPLOAD,
  ACCOUNT_REGISTER,
  ERROR_ACCOUNT_REGISTER,
  CLOSE_NOTIF_REGISTEER,
  FORGOT_PASSWORD,
  SUCCESS_FORGOT_PASSWORD,
  ERROR_FORGOT_PASSWORD,
  LOGOUT
} from '../constants/account'

export const login = createAction(LOGIN)
export const successLogin = createAction(SUCCESS_LOGIN)
export const errorLogin = createAction(ERROR_LOGIN)

export const getAccount = createAction(GET_ACCOUNT)
export const getSuccessAccount = createAction(GET_SUCCESS_ACCOUNT)
export const errorGetAccount = createAction(ERROR_GET_ACCOUNT)

export const isAuthenticate = createAction(IS_AUTHENTICATE)

export const changeAccount = createAction(CHANGE_ACСOUNT)

export const fileUpload = createAction(FILE_UPLOAD)
export const errorFileUpload = createAction(ERROR_FILE_UPLOAD)

export const accountRegister = createAction(ACCOUNT_REGISTER)
export const errorAccountRegister = createAction(ERROR_ACCOUNT_REGISTER)
export const closeNotifRegister = createAction(CLOSE_NOTIF_REGISTEER)

export const forgotPassword = createAction(FORGOT_PASSWORD)
export const successForgotPassword = createAction(SUCCESS_FORGOT_PASSWORD)
export const errorForgotPassword = createAction(ERROR_FORGOT_PASSWORD)

export const logout = createAction(LOGOUT)
