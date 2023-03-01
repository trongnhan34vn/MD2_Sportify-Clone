import * as usersServices from "../API/usersServices";
import { call, put } from "redux-saga/effects";
import * as actions from "../redux/actions";

export const getUsers = function* () {
    try {
        let listUsers = yield call(usersServices.GET_USER)
        yield put()
    } catch {

    }
}

export const postUsers = function* (action) {
    try {
        yield call(usersServices.POST_USER, action.payload)
        yield put(actions.actRecieveData("Success"))
    } catch (error) {
        yield put(actions.actRecieveData("Failed"))
    }
}

export const login = function* (action) {
    try {
        let user = yield call(usersServices.GET_LOGIN, action.payload)
        yield put(actions.actRecieveData({currentUser : user, action: "Success"}))

    } catch (error) {
        yield put(actions.actRecieveData("Failed"))
    }
}