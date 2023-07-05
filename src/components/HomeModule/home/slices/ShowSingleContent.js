import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: false,
};
export const ShowSingleContent = createSlice({
  name: "showsinglecontent",
  initialState,
  reducers: {
    OpenContent: (state, action) => {
      console.log("ShowSingleContent", action.payload);
      state.value = action.payload;
    },
  },
});

export const {OpenContent} = ShowSingleContent.actions;
export default ShowSingleContent.reducer;