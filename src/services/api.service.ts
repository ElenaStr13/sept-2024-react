import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductResponseModel} from "../models/IProductResponceModel.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {
    username: string;
    password: string;
    expiresInMins: number
}
const axiosInstance =  axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
});


axiosInstance.interceptors.request.use((requestObject) => {
if (requestObject.method?.toUpperCase() === 'GET') {
    requestObject.headers.Authorization = 'Bearer' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    //дістаємо accessToken

}
    return requestObject;
})

export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {//функція логінації/входу
   const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('auth/login', {username, password, expiresInMins});
   localStorage.setItem('user', JSON.stringify(userWithTokens)) //зберігаємо  tokens в localStorage
    return userWithTokens;
}

export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data} = await axiosInstance.get<IProductResponseModel>('/products');
    return data.products
}

export const refresh = async () => {
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}}= await axiosInstance.post<ITokenPair>('auth/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin:1
    })
    console.log('accessToken:'+ accessToken);
    console.log(refreshToken);
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
}