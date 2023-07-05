import { createReducer, createSlice } from "@reduxjs/toolkit";
const initialState = {
	value: false,
};
export const BgImgChng = createSlice({
	name: "ChangeBgImg",
	initialState,
	reducers: {
		chngImg: (state, action) => {
			state.value = action.payload;
			console.log(action.payload);
		},
	},
});
export const { chngImg } = BgImgChng.actions;
export default BgImgChng.reducer;
