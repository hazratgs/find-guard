import { createAction } from 'redux-act'
import {
  LOGIN,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  GET_ACCOUNT,
  GET_SUCCESS_ACCOUNT,
  ERROR_GET_ACCOUNT,
  IS_AUTHENTICATE,
  CHANGE_ACСOUNT
} from '../constants/account'

export const login = createAction(LOGIN)
export const successLogin = createAction(SUCCESS_LOGIN)
export const errorLogin = createAction(ERROR_LOGIN)

export const getAccount = createAction(GET_ACCOUNT)
export const getSuccessAccount = createAction(GET_SUCCESS_ACCOUNT)
export const errorGetAccount = createAction(ERROR_GET_ACCOUNT)

export const isAuthenticate = createAction(IS_AUTHENTICATE)

export const changeAccount = createAction(CHANGE_ACСOUNT)
