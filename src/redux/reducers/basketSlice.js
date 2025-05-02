import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const getbasketThink = createAsyncThunk('api/getbasket', async () =>{
    const res = await axios.get('https://681220dd3ac96f7119a6f2fb.mockapi.io/clever')
    return res.data;
})


export const deletebasketThunk = createAsyncThunk('api/deletebasket', async (id) =>{
    const res = await axios.delete(`https://681220dd3ac96f7119a6f2fb.mockapi.io/clever/${id}`)
    return id
})



export const basketSlice=createSlice({
    name: 'basket',
    initialState:{
        basket:[],
    },
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(getbasketThink.fulfilled, (state,action)=>{
            state.basket=action.payload
        })

        .addCase(getbasketThink.pending, (state,action)=>{
            state.loading=true
        })
        .addCase(getbasketThink.rejected, (state,action)=>{
            state.loading=false
            state.error=action.error.message
        })

        .addCase(deletebasketThunk.fulfilled, (state,action) =>{
            state.basket= state.basket.filter(item => item.id !== action.payload)
        })
    }
    
})
 export default basketSlice.reducer