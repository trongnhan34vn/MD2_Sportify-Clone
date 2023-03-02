import * as actionType from "../const/actionType";

const initState = []

const listTracksAdmin = (state = initState, action) => {
    switch (action.type) {
        case actionType.RECIEVE_LISTTRACKS:
            return action.payload
        default:
            return state
    }
}

export default listTracksAdmin