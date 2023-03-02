import { combineReducers } from 'redux'
import controlAudio from './controlAudio'
import { recieveData } from './recieveData'
import playlists from './playlistsReducer'
import toggle from './toggleReducer'
import listTracksAdmin from './listTracksAdmin'
import controlListTrackAdmin from './controlListTrackAdmin'


const rootReducer = combineReducers({ controlAudio, recieveData, playlists, toggle, listTracksAdmin, controlListTrackAdmin })

export default rootReducer