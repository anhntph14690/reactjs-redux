import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, list, read, remove, update } from "../../api/products";

import { IProduct } from "../../models/products";


interface IProductState {
    product: IProduct | {},
    products: IProduct[]
}

const initialState: IProductState = {
    product: {},
    products: []
}


export const addProduct = createAsyncThunk("product/add", async (product: IProduct) => {
    const res = await add(product)
    return res.data; 
})
export const listProducts = createAsyncThunk("product/list", async () => {
    const res = await list()
    return res.data;
})
export const readProduct = createAsyncThunk("product/read", async (id: number) => {
    const res = await read(id)
    return res.data;
})
export const removeProduct = createAsyncThunk("product/remove", async (id: number) => {
    await remove(id);
})
export const updateProduct = createAsyncThunk("product/update", async (product: IProduct) => {
    const res = await update(product);
    return res
})
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (build) => {
            build.addCase(addProduct.fulfilled, (state, { payload }) => {
                state.products.push(payload as IProduct)
            }),
            build.addCase(listProducts.fulfilled, (state, { payload }) => {
                state.products = payload as any
            }),
            build.addCase(readProduct.fulfilled, (state, { payload }) => {
                state.product = payload
            }),
            build.addCase(removeProduct.fulfilled, (state, { payload }) => {
                // state.products = state.products.filter((item) => item._id !== payload.id)
            })
            build.addCase(updateProduct.fulfilled, (state, {payload}) => {
                // const user = action.payload
                state.product = payload as any
                console.log(payload)
            });
    }
})
export default productSlice.reducer