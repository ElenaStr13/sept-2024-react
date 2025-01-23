import {IUserResponseModel} from "../models/IUserResponseModel.ts";
import {ICartResponseModel} from "../models/ICartResponseModel.ts";

export const baseUrl = 'http://dummyjson.com';
export const userService = {
    getAllUsers: async (page:string):Promise<IUserResponseModel> => {
        let skip = 0;
        const limit = 30;
        if (+page > 0) {
            skip = limit*(+page) - limit;
        }
        return await fetch(`${baseUrl}/users?skip=${skip}`)
            .then(value=> value.json())
    }
};
export const cartService = {    getCartsOfUser: async (userId:string): Promise<ICartResponseModel> => {
        return await fetch(baseUrl + '/carts/user/'+ userId)
            .then(value => value.json())
    }
};