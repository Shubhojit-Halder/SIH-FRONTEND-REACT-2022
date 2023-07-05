import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
	change: true,
	data: "",
	user_id: "",
	inactive: false,
};

export const ChatOpen = createSlice({
	name: "chatopen",
	initialState,
	reducers: {
		open: (state, action) => {
			state.value = action.payload;
		},
		change: (state, action) => {
			state.change = action.payload;
		},
		setdata: (state, action) => {
			state.data = action.payload;
		},
		setUserId: (state, action) => {
			state.user_id = action.payload;
			state.inactive = true;
		},
		setInActive: (state, action) => {
			state.inactive = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { open, change, setdata, setUserId, setInActive } =
	ChatOpen.actions;

export default ChatOpen.reducer;
