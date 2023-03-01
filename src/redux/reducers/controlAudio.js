import * as actionType from "../const/actionType";

const initState = {
    isPlay: false,
    playlistId: null,
    currentTrack: [],
    reset: false,
}

const controlAudio = (state = initState, action) => {
    switch (action.type) {
        case actionType.PLAY_AUDIO:
            return { ...state, playlistId: action.payload.id, currentTrack: action.payload.playlist}
        case actionType.SET_ISPLAY:
            return {...state, isPlay: action.payload}
            case actionType.RESET_CURRENTTIME:
                return {...state, reset: action.payload}
        default:
            return state
    }
}

export default controlAudio