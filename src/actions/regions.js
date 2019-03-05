import { createAction } from 'redux-act'
import {
  GET_REGIONS,
  GET_SUCCESS_REGIONS,
  ERROR_GET_REGIONS
} from '../constants/regions'

export const getRegions = createAction(GET_REGIONS)
export const successRegions = createAction(GET_SUCCESS_REGIONS)
export const errorRegions = createAction(ERROR_GET_REGIONS)
