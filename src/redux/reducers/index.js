import { combineReducers } from 'redux'
import controlToggle from './controlToggleReducer'
import { recieveData } from './recieveData'

const rootReducer = combineReducers({ controlToggle, recieveData })

export default rootReducer