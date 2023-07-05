import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "",
  change: true,
};
export const EmojimartSlice = createSlice({
  name: "emojimartslice",
  initialState,
  reducers: {
    Change: (state, action) => {
      console.log("dispatch", action.payload);
      state.change = action.payload;
    },
    myEmoji: (state, action) => {
      console.log("dispatch", action.payload);
      state.value = action.payload;
    },
  },
});

export const { myEmoji, Change } = EmojimartSlice.actions;
export default EmojimartSlice.reducer;
