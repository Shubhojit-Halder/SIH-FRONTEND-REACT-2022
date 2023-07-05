import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: "",
	localUserID: "",
};

export const SendMessage = createSlice({
	name: "SendMessage",
	initialState,
	reducers: {
		setUserID: (state, action) => {
			state.value = action.payload;
		},
		setLocalUserID: (state, action) => {
			state.localUserID = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setUserID, setLocalUserID } = SendMessage.actions;

export default SendMessage.reducer;
