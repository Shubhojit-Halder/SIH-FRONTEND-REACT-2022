import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "",
  change: true,
};
export const EmojiSliceFC = createSlice({
  name: "emojilicefc",
  initialState,
  reducers: {
    ChangeFC: (state, action) => {
      console.log("dispatch", action.payload);
      state.change = action.payload;
    },
    myEmojiFC: (state, action) => {
      console.log("dispatch", action.payload);
      state.value = action.payload;
    },
  },
});

export const { myEmoji, Change } = EmojimartSlice.actions;
export default EmojimartSlice.reducer;
