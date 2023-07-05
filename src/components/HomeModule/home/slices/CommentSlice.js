import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
    message:"",
    image:"",
};

export const CommentSlice = createSlice({
	name: "commentslice",
	initialState,
	reducers: {
		openImgselector: (state, action) => {
			console.log("dispatch", action.payload);
			state.value = action.payload;
		},
        setImg: (state,action) =>{
			console.log("dispatch", action.payload);
			state.image = action.payload;
        },
        setComment: (state,action) =>{
			console.log("dispatch", action.payload);
			state.message = action.payload;
        }
	},
});

// Action creators are generated for each case reducer function
export const { openImgselector,setImg,setComment } = CommentSlice.actions;

export default CommentSlice.reducer;
