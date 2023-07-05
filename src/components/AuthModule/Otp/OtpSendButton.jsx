import { Pin } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { SendOTP } from "../QueryHandlers/AuthQueries";
import { useDispatch } from "react-redux";
import { SetSuccessAlert, SetSuccessAlertMsg } from "../slices/ErrorMessages";
const OtpSendButton = () => {
	const dispatch = useDispatch();
  const mutation = useMutation(SendOTP, {
    onError: (e) => {
      console.log(e);
    },
    onSuccess: (e) => {
      console.log(e.data);
      dispatch(SetSuccessAlertMsg("OTP has been sent!!!"));
      dispatch(SetSuccessAlert(true));
    },
  });
  return (
    <LoadingButton
      type="submit"
      loading={mutation.isLoading}
      variant="outlined"
      sx={{
        position: "relative",
        left: "50%",
        transform: "translate(-50%,0)",
        width: "150px",
        marginTop: "15px",
        color: "rgb(88,88,252)",
      }}
      endIcon={<Pin />}
      className="loginBTN"
      onClick={() => {
        mutation.mutate({ user_id: localStorage.getItem("user_id") });
      }}
    >
      Send OTP
    </LoadingButton>
  );
};

export default OtpSendButton;
