import axios from "axios";


export interface IUser {
    id: string,
    name: string
}

export const getAllUsers = async () => {
    return axios.get<IUser[]>("http://localhost:3000/users")
   
}