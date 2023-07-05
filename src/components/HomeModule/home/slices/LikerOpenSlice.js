import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
};

export const LikerOpenSlice = createSlice({
	name: "LikernamesOpener",
	initialState,
	reducers: {
		openLikerNames: (state, action) => {
			console.log("dispatch", action.payload);
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { openLikerNames } = LikerOpenSlice.actions;

export default LikerOpenSlice.reducer;
