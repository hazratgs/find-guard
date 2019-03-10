import { createAction } from 'redux-act'
import {
  GET_USERS,
  SUCCESS_GET_USERS,
  ERROR_GET_USERS
} from '../constants/users'

export const getUsers = createAction(GET_USERS)
export const successGetUsers = createAction(SUCCESS_GET_USERS)
export const errorGetUsers = createAction(ERROR_GET_USERS)
