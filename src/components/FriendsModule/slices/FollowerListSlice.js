import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 1,
};

export const FollowerListSlice = createSlice({
	name: "followerList",
	initialState,
	reducers: {
		openFollowerList: (state, action) => {
			console.log("dispatch", action.payload);
			state.value = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { openFollowerList } = FollowerListSlice.actions;

export default FollowerListSlice.reducer;
