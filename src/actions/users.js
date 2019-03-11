import { createAction } from 'redux-act'
import {
  GET_USERS,
  SUCCESS_GET_USERS,
  ERROR_GET_USERS,
  DELETE_USER,
  SUCCESS_DELETE_USER
} from '../constants/users'

export const getUsers = createAction(GET_USERS)
export const successGetUsers = createAction(SUCCESS_GET_USERS)
export const errorGetUsers = createAction(ERROR_GET_USERS)

export const deleteUser = createAction(DELETE_USER)
export const successDeleteUser = createAction(SUCCESS_DELETE_USER)
