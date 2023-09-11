import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const userSlice=createSlice({
    name:"user",
    initialState:{value: {name:'',age:0,email:'',number:0} },
    reducers:{
        login:(state,action)=>{
            state.value=action.payload.name;      
        },
    },
});

export default userSlice.reducer;