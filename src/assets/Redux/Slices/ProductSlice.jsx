import { createSlice } from "@reduxjs/toolkit";


const ProductSlice = createSlice({
    name:'products',
    initialState:[],
    reducers:{
        fethProducts:(state,action) => {
            state.length = 0
         state.push(...action.payload)
        }

    }
    
})
export const {fethProducts} = ProductSlice.actions
export default ProductSlice.reducer