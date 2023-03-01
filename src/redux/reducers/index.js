import { combineReducers } from 'redux'
import controlAudio from './controlAudio'
import { recieveData } from './recieveData'
import playlists from './playlistsReducer'
import toggle from './toggleReducer'


const rootReducer = combineReducers({ controlAudio, recieveData, playlists, toggle })

export default rootReducer