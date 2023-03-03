import * as actionType from "../redux/const/actionType";
import { all, takeLatest } from "redux-saga/effects";
import * as usesSaga from "./usesSaga";
import * as playlistsSaga from "./playlistsSaga";
import * as listTracksSaga from "./listTracksSaga";

export const rootSaga = function*() {
    yield all(
        [
          takeLatest(actionType.POST_USER, usesSaga.postUsers),
          takeLatest(actionType.LOGIN, usesSaga.login),
          takeLatest(actionType.GET_PLAYLISTS, playlistsSaga.getPlaylists),
          takeLatest(actionType.GET_LISTTRACKS, listTracksSaga.getListTracks),
          takeLatest(actionType.POST_NEW_TRACK, listTracksSaga.postNewTrack),
          takeLatest(actionType.DEL_TRACK, listTracksSaga.delTrack),
          takeLatest(actionType.UPDATE_TRACK, listTracksSaga.updateTrack),
          takeLatest(actionType.SEARCH_NAME_TRACK, listTracksSaga.searchTrack)
        ]
    )
}
