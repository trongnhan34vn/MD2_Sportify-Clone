import * as actionType from "./const/actionType"

export const actPlayAudio = (id, playlist) => {
    return {
        type: actionType.PLAY_AUDIO,
        payload: {id, playlist}
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

export const actGetPlaylists = () => {
    return {
        type: actionType.GET_PLAYLISTS
    }
}

export const actRecievePlaylists = (data) => {
    return {
        type: actionType.RECIEVE_PLAYLISTS,
        payload: data
    }
}

export const setIsPlay = (payload) => {
    return {
        type: actionType.SET_ISPLAY,
        payload
    }
}

export const resetCurrentTime = (payload) => {
    return {
        type: actionType.RESET_CURRENTTIME,
        payload
    }
}




