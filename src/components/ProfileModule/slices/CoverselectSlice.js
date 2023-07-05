import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:false,
}

export const CoverselectSlice = createSlice({
    name:"CoverChngSlice",
    initialState,
    reducers:{
        openDropzoneCoverPic:(state,action)=>{
            console.log("dispatch",state.value);
            state.value=action.payload;
        }
    }
})

export const {openDropzoneCoverPic} = CoverselectSlice.actions;
export default CoverselectSlice.reducer;