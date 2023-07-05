import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  change: true,
  data: "",
};

export const emojiSlice = createSlice({
  name: "emojibar",
  initialState,
  reducers: {
    openemoji: (state, action) => {
      state.value = action.payload;
    },
    change: (state, action) => {
      state.change = action.payload;
    },
    setdata: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openemoji, change, setdata } = emojiSlice.actions;

export default emojiSlice.reducer;
