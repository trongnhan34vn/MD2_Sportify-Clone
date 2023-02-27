import * as actionType from "../const/actionType";

const initState = {
    isPlay: false,
    toggleNav: false
}

const controlToggle = (state = initState, action) => {
    switch (action.type) {
        case actionType.PLAY_AUDIO:
            return { ...state, isPlay: !state.isPlay }
        case actionType.NAV_TOGGLE:
            return { ...state, toggleNav: !state.toggleNav }
        default:
            return state
    }
}

export default controlToggle