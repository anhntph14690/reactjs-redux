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


export const addProduct = createAsyncThunk("product/add", async (product: any) => {
    const res = await add(product)
    return res;
})
export const listProducts = createAsyncThunk("product/list", async () => {
    const res = await list()
    return res;
})
export const readProduct = createAsyncThunk("product/read", async (id: any) => {
    const res = await read(id)
    return res;
})
export const removeProduct = createAsyncThunk("product/remove", async (id: any) => {
    const res = await remove(id);
    return res
})
export const updateProduct = createAsyncThunk("product/update", async (product: any) => {
    const res = await update(product);
    return res
})
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (build) => {
            build.addCase(addProduct.fulfilled, (state, { payload }) => {
                state.products.push(payload as any)
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
            });
    }
})
export default productSlice.reducer