import * as actionType from "../const/actionType";

const initState = {
    selectTrack: null,
    search: ''
}

const controlListTrackAdmin = (state = initState, action) => {
    switch (action.type) {
        case actionType.SELECT_TRACK:
            return {...state, selectTrack: action.payload}
        default:
            return state
    }
}

export default controlListTrackAdmin