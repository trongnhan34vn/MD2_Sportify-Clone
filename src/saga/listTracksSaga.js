import { call, put } from "redux-saga/effects";
import * as listTracks from "../API/listTrackAdmin";
import * as actions from "../redux/actions";

export function* getListTracks() {
    try {
        let listTracksAdmin = yield call(listTracks.GET_LISTTRACKS)
        yield put(actions.recieveListTracksAdmin(listTracksAdmin))
    } catch (error) {

    }
}

export function* postNewTrack(action) {
    try {
        yield call(listTracks.POST_NEW_TRACK, action.payload)
        yield getListTracks()
    } catch (error) {

    }
}

export function* delTrack(action) {
    try {
        yield call(listTracks.DEL_TRACK, action.payload)
        yield getListTracks()
    } catch (error) {

    }
}

export function* updateTrack(action) {
    try {
        yield call(listTracks.UPDATE_TRACK, action.payload)
        yield getListTracks()
    } catch (error) {

    }
}

export function* searchTrack(action) {
    try {
        let searchResult = yield call(listTracks.SEARCH_TRACK, action.payload)
        console.log(searchResult);
        yield put(actions.recieveSearchTrack(searchResult))
    } catch (error) {
        console.log(error);
    }
}