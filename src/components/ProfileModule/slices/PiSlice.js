import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:false,
}

export const PiSlice = createSlice({
    name:"PiSlicing",
    initialState,
    reducers:{
        openPI:(state,action)=>{
            console.log("dispatch",state.value);
            state.value=action.payload;
        }
    }
})

export const {openPI} = PiSlice.actions;
export default PiSlice.reducer;