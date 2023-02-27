import * as actionType from "../redux/const/actionType";
import { all, takeLatest } from "redux-saga/effects";
import * as useSaga from "./usesSaga";

export const rootSaga = function*() {
    yield all(
        [
          takeLatest(actionType.POST_USER, useSaga.postUsers)
        ]
    )
}
