import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: "",
};

export const ChatReply = createSlice({
	name: "ChatReply",
	initialState,
	reducers: {
		setMessageID: (state, action) => {
			state.value = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setMessageID } = ChatReply.actions;

export default ChatReply.reducer;
