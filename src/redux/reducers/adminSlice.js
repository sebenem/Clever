import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const getadminThunk = createAsyncThunk('api/getadmin', async () =>{
    const res = await axios.get('https://681220dd3ac96f7119a6f2fb.mockapi.io/clever')
    return res.data;
})

export const postadminThunk=createAsyncThunk('api/postadmin', async (data)=>{
    const res = await axios.post('https://681220dd3ac96f7119a6f2fb.mockapi.io/clever',data)
    return res.data;
})

export const deleteadminThunk=createAsyncThunk('api/deleteadmin', async (id)=>{
    const res= await axios.delete(`https://681220dd3ac96f7119a6f2fb.mockapi.io/clever/${id}`)
    return id
})

export const adminSlice=createSlice({
    name: 'admin',
    initialState:{
        admin:[],
    },
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(getadminThunk.fulfilled, (state,action)=>{
            state.admin=action.payload
        })

        .addCase(getadminThunk.pending, (state,action)=>{
            state.loading=true
        })
        .addCase(getadminThunk.rejected, (state,action)=>{
            state.loading=false
            state.error=action.error.message 
        })

        .addCase(postadminThunk.fulfilled, (state,action)=>{
            state.admin.push(action.payload)
        })
        .addCase(deleteadminThunk.fulfilled, (state,action) =>{
            state.admin= state.admin.filter(item => item.id !== action.payload)
        })
    }
    
})
 export default adminSlice.reducer