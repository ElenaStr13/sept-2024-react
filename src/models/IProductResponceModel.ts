import {IProduct} from "./IProduct.ts";

export type IProductResponseModel = {
    total: number;
    skip: number;
    limit: number;
    products:IProduct[]
}