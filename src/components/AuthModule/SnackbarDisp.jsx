import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { SetErrorAlert, SetSuccessAlert } from "./slices/ErrorMessages";
import { useEffect } from "react";
const SnackbarDisp = () => {
  const dispatch = useDispatch();
  const ErrAlertState = useSelector(
    (state) => state.errormessageslice.errvalue
  );
  const ErrAlertMsg = useSelector(
    (state) => state.errormessageslice.errMessage
  );
  const SuccessAlertState = useSelector(
    (state) => state.errormessageslice.successvalue
  );
  const SuccessAlertMsg = useSelector(
    (state) => state.errormessageslice.successMsg
  );
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  useEffect(() => {
    setTimeout(() => {
      if (ErrAlertState) dispatch(SetErrorAlert(false));
      else if (SuccessAlertState) dispatch(SetSuccessAlert(false));
    },3000);
  });
  const vertical = "top";
  const horizontal = "center";

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(SetErrorAlert(false));
    dispatch(SetSuccessAlert(false));
  };
  return (
    <>
      {ErrAlertState ? (
        <Snackbar
          open={ErrAlertState}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {ErrAlertMsg}
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )}
      {SuccessAlertState ? (
        <Snackbar
          open={SuccessAlertState}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {SuccessAlertMsg}
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )}
    </>
  );
};

export default SnackbarDisp;
