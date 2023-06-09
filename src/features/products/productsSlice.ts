import { createSlice ,PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../app/api"; 

export interface ProductsState {
    products:{[id:string] : Product}
}
const initialState: ProductsState = {
    products:{
       

    }
}
const productSlice = createSlice ({
    name: "products",
    initialState,
    reducers:{
        fetchedProducts(state, action: PayloadAction<Product[]>){
            const products = action.payload;
            products.forEach(product => {
                state.products[product.id]= product;
            })
        }

    }
})
export const {fetchedProducts} = productSlice.actions;
export default productSlice.reducer;