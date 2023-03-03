import * as actionType from "../const/actionType";

const initState = {
    result: {
        action: "",
        currentUser: null
    }
}

export const recieveData = (state = initState, action) => {
    switch (action.type) {
        case actionType.RECIEV_DATA:
            return {...state, result: action.payload}
        default:
            return state
    }
}