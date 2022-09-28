
import { IProduct } from "../models/products";
import instance from "./instance";
// import { isAuthenticate } from "../utils/localStorage";


// const { token, user } = isAuthenticate();


export const add = (product: IProduct) => {
    const url = `products`;
    return instance.post(url, product);
}
export const list = () => {
    const url = "products";
    return instance.get(url);
}
export const read = (id: any) => {
    const url = `products/${id}`;
    return instance.get(url);
}
export const remove = (id: number | undefined) => {
    const url = `products/${id}`;
    return instance.delete(url);
}
export const update = (product: IProduct) => {
    const url = `products/${product.id}`;  
    return instance.put(url, product);
}