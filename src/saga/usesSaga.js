import * as usersServices from "../API/usersServices";
import { call, put } from "redux-saga/effects";
import * as action from "../redux/actions";

export const getUsers = function* () {
    try {
        let listUsers = call(usersServices.GET_USER)
        yield put()
    } catch {

    }
}

export const postUsers = function* (action) {
    try {
        yield call(usersServices.POST_USER, action.payload)
    } catch {

    }
}