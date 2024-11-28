import { IUser } from "@/type/type";
import axios from "axios"

export const getUsersApi = async () => {
    const { data } = await axios.get('https://api.escuelajs.co/api/v1/users')
    return data;
}

export const getUserByIdApi = async (id: number) => {
    const { data } = await axios.get('https://api.escuelajs.co/api/v1/users/' + id)
    return data
}

export const createUserApi = async (obj: IUser) => {
    const { data } = await axios.post('https://api.escuelajs.co/api/v1/users/', obj)
    return data
}

export const updateUserApi = async ({id, obj} : {id: number; obj: IUser}) => {
    const {data} = await axios.put('https://api.escuelajs.co/api/v1/users/'+id, obj)
    return data
} 

export const deleteUserByIdApi = async (id: number) => {
    const { data } = await axios.delete('https://api.escuelajs.co/api/v1/users/' + id)
    return data
}