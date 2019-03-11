import { createAction } from 'redux-act'
import {
  GET_REGIONS,
  GET_SUCCESS_REGIONS,
  ERROR_GET_REGIONS,
  DELETE_REGION,
  SUCCESS_DELETE_REGION,
  ADD_REGION
} from '../constants/regions'

export const getRegions = createAction(GET_REGIONS)
export const successRegions = createAction(GET_SUCCESS_REGIONS)
export const errorRegions = createAction(ERROR_GET_REGIONS)

export const deleteRegion = createAction(DELETE_REGION)
export const successDeleteRegion = createAction(SUCCESS_DELETE_REGION)

export const addRegion = createAction(ADD_REGION)
