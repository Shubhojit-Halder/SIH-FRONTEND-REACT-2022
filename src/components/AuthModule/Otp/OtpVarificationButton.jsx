import Login from "@mui/icons-material/Login";
import { LoadingButton } from "@mui/lab";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { VerifyOTP } from "../QueryHandlers/AuthQueries";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { SetErrorAlert, SetErrorAlertMsg, SetSuccessAlert, SetSuccessAlertMsg } from "../slices/ErrorMessages";
const OtpVarificationButton = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const mutation = useMutation(VerifyOTP, {
		onSuccess: (e) => {
			dispatch(SetSuccessAlertMsg("Authentication Successful"));
			dispatch(SetSuccessAlert(true));
			// setError(false);
			// setErrorMessage("Authentication Successful");
			setTimeout(() => {
				navigate("/");
				localStorage.setItem("logged_in", true);
			}, 1000);
		},
		onError: (e) => {
			console.log(e);
			dispatch(SetErrorAlertMsg("OTP isn't Matching, Try Resending OTP"));
			dispatch(SetErrorAlert(true));
			// setError(true);
			// setErrorMessage("OTP Not Matched, You Can Resend OTP");
		},
	});
	// const { setError, setErrorMessage } = props.errors;
	return (
		<LoadingButton
			type="submit"
			variant="contained"
			loading={mutation.isLoading}
			sx={{
				marginTop: "30px",
				width: "70%",
				bgcolor: "rgb(88,88,252)",
				"&:hover": { bgcolor: "#3838b1" },
			}}
			endIcon={<Login />}
			className="loginBTN"
			onClick={() => {
				mutation.mutate({
					user_id: localStorage.getItem("user_id"),
					otp_get: props.data,
				});
			}}
		>
			Login
		</LoadingButton>
	);
};

export default OtpVarificationButton;
