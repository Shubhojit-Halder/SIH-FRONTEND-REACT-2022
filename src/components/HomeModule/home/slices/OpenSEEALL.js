import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
export const SeeALLSlice = createSlice({
  name: "seeall",
  initialState,
  reducers: {
    Openseeall: (state, action) => {
      console.log("dispatch", action.payload);
      state.value = action.payload;
    },
  },
});

export const {Openseeall} = SeeALLSlice.actions;
export default SeeALLSlice.reducer;