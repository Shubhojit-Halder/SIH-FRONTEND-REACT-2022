import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:false,
}

export const dpSlice = createSlice({
    name:"dp",
    initialState,
    reducers:{
        openCropper:(state,action)=>{
            console.log("dispatch",state.value);
            state.value=action.payload;
        }
    }
})

export const {openCropper} = dpSlice.actions;
export default dpSlice.reducer;