import * as actionType from "../const/actionType"

const initState = false

const toggle = (state = initState, action) => {
    switch (action.type) {
        case actionType.NAV_TOGGLE:
            return !state
        default:
            return state
    }
}

export default toggle