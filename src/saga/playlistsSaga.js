import * as playlistsService from "../API/playlistsService";
import { call, put } from "redux-saga/effects";
import * as actions from "../redux/actions";


export function* getPlaylists() {
    try {
        let listPlaylists = yield call(playlistsService.GET_PLAYLISTS)
        // let playlist1 = listPlaylists.filter(playlist => playlist.type.includes("Buồn"))
        // let playlist2 = listPlaylists.filter(playlist => playlist.type.includes("Acoustic"))
        // let playlist3 = listPlaylists.filter(playlist => playlist.type.includes("R&B"))
        // let playlist4 = listPlaylists.filter(playlist => playlist.type.includes("Pop Ballad"))
        // let playlist5 = listPlaylists.filter(playlist => playlist.type.includes("Indie"))
        // let playlist6 = listPlaylists.filter(playlist => playlist.type.includes("EDM"))
        // let playlist7 = listPlaylists.filter(playlist => playlist.type.includes("Đời sống"))
        // let playlist8 = listPlaylists.filter(playlist => playlist.albums.includes("Danh sách có thể bạn sẽ thích"))
        // let list = [playlist1, playlist2, playlist3, playlist4, playlist5, playlist6, playlist7]
        yield put(actions.actRecievePlaylists(listPlaylists))
    } catch (error) {

    }
}