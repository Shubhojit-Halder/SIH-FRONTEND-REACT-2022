import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  errvalue: false,
  errMessage:"",
  successvalue:false,
  successMsg:"",
};
export const ErrorMessageSlice = createSlice({
  name: "errormessageslice",
  initialState,
  reducers: {
    SetErrorAlert: (state, action) => {
      console.log("ErrorMessageSlice", action.payload);
      state.errvalue = action.payload;
    },
    SetErrorAlertMsg:(state,action) =>{
        console.log("ErrorMessageSlice", action.payload);
        state.errMessage=action.payload;
    },
    SetSuccessAlert: (state, action) => {
      console.log("ErrorMessageSlice", action.payload);
      state.successvalue = action.payload;
    },
    SetSuccessAlertMsg:(state,action) =>{
        console.log("ErrorMessageSlice", action.payload);
        state.successMsg=action.payload;
    }
  },
});

export const {SetErrorAlert,SetErrorAlertMsg,SetSuccessAlert,SetSuccessAlertMsg} = ErrorMessageSlice.actions;
export default ErrorMessageSlice.reducer;