import {createSlice} from '@reduxjs/toolkit';

const initialState=[];
const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{

    }
});

export const {add,remove} = productSlice.actions;
export default productSlice.reducer;