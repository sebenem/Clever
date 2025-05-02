import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsThunk = createAsyncThunk('api/getproducts', async () =>{
    const res = await axios.get('https://dummyjson.com/products')
    return res.data.products;
})

export const postProductsThunk=createAsyncThunk('api/postproducts', async (data)=>{
    const res = await axios.post('https://681220dd3ac96f7119a6f2fb.mockapi.io/clever',data)
    return res.data;
})

export const deleteProductsThunk=createAsyncThunk('api/deleteproducts', async (id)=>{
    const res= await axios.delete(`https://681220dd3ac96f7119a6f2fb.mockapi.io/clever/${id}`)
    return id
})

export const productsSlice=createSlice({
    name: 'products',
    initialState:{
        products:[],
    },
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(getProductsThunk.fulfilled, (state,action)=>{
            state.products=action.payload
        })
        .addCase(getProductsThunk.pending, (state,action)=>{
            state.loading=true
        })
        .addCase(getProductsThunk.rejected, (state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
        
        .addCase(postProductsThunk.fulfilled, (state,action) =>{
            state.products.push(action.payload)
        })
    }
    
})
 export default productsSlice.reducer