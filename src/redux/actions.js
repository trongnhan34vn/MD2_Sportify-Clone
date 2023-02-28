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

export const actPostUser = (newUser) => {
    return {
        type: actionType.POST_USER,
        payload: newUser
    }
}

export const actRecieveData = (data) => {
    return {
        type: actionType.RECIEV_DATA,
        payload: data
    }
}

export const actLogin = (detectUser) => {
    return {
        type: actionType.LOGIN,
        payload: detectUser
    }
}