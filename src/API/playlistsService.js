import { instance } from "./axios";

export const GET_PLAYLISTS = async () => {
    let response = await instance.get("playlists");
    return response.data
}