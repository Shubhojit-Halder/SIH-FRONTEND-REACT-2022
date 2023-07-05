import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:false,
    shareEditVal:false,
    mediaPost:0,
    mediaType:"",
}

export const postWriteSlice = createSlice({
    name:"postWrite",
    initialState,
    reducers:{
        openEditor:(state,action)=>{
            console.log("dispatch",action.payload);
            state.value=action.payload;
        },
        openShareEditor:(state,action)=>{
            console.log("dispatch",action.payload);
            state.shareEditVal=action.payload;
        },
        openPhotoPost:(state,action)=>{
            console.log("dispatch",action.payload);
            state.mediaPost=action.payload;
        },
        setMediaType:(state,action)=>{
            console.log("dispatch",action.payload);
            state.mediaType=action.payload;
        }
    }
})

export const {openEditor,openShareEditor,openPhotoPost,setMediaType} = postWriteSlice.actions;
export default postWriteSlice.reducer;