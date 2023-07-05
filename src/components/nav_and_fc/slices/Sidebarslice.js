import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
	people: false,
	notification: false,
};

export const sidebarSlice = createSlice({
	name: "navbar",
	initialState,
	reducers: {
		open: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value = action.payload;
		},
		people: (state, action) => {
			state.people = action.payload;
		},
		notification: (state, action) => {
			state.notification = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { open, people, notification } = sidebarSlice.actions;

export default sidebarSlice.reducer;
