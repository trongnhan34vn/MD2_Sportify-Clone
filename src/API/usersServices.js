import { instance } from "./axios";

export const GET_USER = async() => {
    let response = await instance.get('users');
    return response.data
}

export const POST_USER = async(newUser) => {
    // await instance.post('users', newUser)
}