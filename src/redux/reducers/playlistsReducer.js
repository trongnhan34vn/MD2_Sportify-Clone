import * as actionType from "../const/actionType";

const initState = []

const playlists = (state = initState, action) => {
    switch (action.type) {
        case actionType.RECIEVE_PLAYLISTS:
            return action.payload
        default:
            return state
    }
}

export default playlists