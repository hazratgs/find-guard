import { createAction } from 'redux-act'
import {
  SUCCESS_AUTHORIZATION,
  GET_USER_PROFILE,
  CHANGE_PROFILE
} from '../constants/profile'

export const successAuthorization = createAction(SUCCESS_AUTHORIZATION)
export const getUserProfile = createAction(GET_USER_PROFILE)
export const changeProfile = createAction(CHANGE_PROFILE)
