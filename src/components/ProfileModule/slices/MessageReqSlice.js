import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:false,
}

export const MsgReqSlice = createSlice({
    name:"msgreq",
    initialState,
    reducers:{
        openMsgReq:(state,action)=>{
            console.log("dispatch",state.value);
            state.value=action.payload;
        }
    }
})

export const {openMsgReq} = MsgReqSlice.actions;
export default MsgReqSlice.reducer;