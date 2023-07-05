import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  change: false,
  name:"",
};
export const FloatChatSlice = createSlice({
  name: "floatChatOpener",
  initialState,
  reducers: {
    openFC: (state, action) => {
      console.log("dispatch", action.payload);
      state.change = action.payload;
    },
    nameChngFC: (state, action) => {
      console.log("dispatch", action.payload);
      state.name = action.payload;
    },
  },
});

export const { openFC,nameChngFC } = FloatChatSlice.actions;
export default FloatChatSlice.reducer;
