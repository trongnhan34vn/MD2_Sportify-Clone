import { instance } from "./axios";

export const GET_LISTTRACKS = async () => {
    let response = await instance.get("listTracks");
    return response.data
}

export const POST_NEW_TRACK = async (newTrack) => {
    console.log(newTrack);
    await instance.post("listTracks", newTrack)
}

export const DEL_TRACK = async (id) => {
    await instance.delete(`listTracks/${id}`)
}

export const UPDATE_TRACK = async (updateTrack) => {
    console.log(updateTrack);
    await instance.patch(`listTracks/${updateTrack.id}`, updateTrack)
}

export const SEARCH_TRACK = async (search) => {
    let response = await instance.get(`listTracks/?audioName_like=${search}`)
    return response.data
}