import * as actionType from "./const/actionType"

export const actPlayAudio = () => {
    return {
        type: actionType.PLAY_AUDIO,
    }
}

export const actToggleNav = () => {
    return {
        type: actionType.NAV_TOGGLE
    }
}