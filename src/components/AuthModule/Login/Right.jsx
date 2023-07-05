import { FormControl, Grid } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Box } from "@mui/system";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import LoginRightWrapper from "../styles/LoginRight.styled";
import Inputs from "./Inputs";
import { useMutation } from "@tanstack/react-query";
import { setLocalUserID } from "../../ChatModule/slices/MessageSendSlice";
import { useDispatch } from "react-redux";
import { SetErrorAlert, SetErrorAlertMsg } from "../slices/ErrorMessages";
import { Login } from "../QueryHandlers/AuthQueries";

const Right = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const mutation = useMutation(Login, {
		onSuccess: (e) => {
			console.log(e.data);
			localStorage.setItem("user_id", e.data.user_id);
			localStorage.setItem("logged_in", true);
			props.socket.auth.id = e.data.user_id;
			dispatch(setLocalUserID(e.data.user_id));
			navigate("/");
		},
		onError: (e) => {
			if (e.response.status === 401) {
				dispatch(SetErrorAlertMsg("Email or Password is incorrect"));
				dispatch(SetErrorAlert(true));
			}
			if (e.response.status === 403) {
				dispatch(SetErrorAlertMsg("Account is not activate"));
				dispatch(SetErrorAlert(true));
				console.log(e.response.data.user_id);
				localStorage.setItem("user_id", e.response.data.user_id);
				localStorage.setItem("logged_in", "");
			}
		},
	});
	const [data, setData] = useState({ email: "", password: "" });
	return (
		<LoginRightWrapper>
			<FormControl style={{ padding: "10px", width: "100%", height: "100%" }}>
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<Grid
						container
						spacing={3}
						style={{
							padding: "10px",
							height: "100%",
							boxSizing: "border-box",
						}}
					>
						<Grid item xs={12}>
							<Box className="inputs">
								<Inputs
									email={data.email}
									password={data.password}
									setData={setData}
								/>
								<div
									className="forgotpassword"
									style={{ justifyContent: "flex-end" }}
								>
									<span className="singup-redirect">Forgot Password ?</span>
								</div>
							</Box>
							<div className="regButton">
								<LoadingButton
									type="submit"
									variant="contained"
									sx={{
										width: "80%",
										bgcolor: "rgb(88,88,252)",
										"&:hover": { bgcolor: "#3838b1" },
									}}
									endIcon={<LoginIcon />}
									className="loginBTN"
									loading={mutation.isLoading}
									onClick={() => {
										mutation.mutate({
											email: data.email,
											password: data.password,
										});
									}}
								>
									Login
								</LoadingButton>
							</div>
							<div className="forgotpassword">
								<span>Not Have an Account ?</span>
								<span
									className="singup-redirect"
									onClick={() => {
										navigate("/auth/signup");
									}}
								>
									Signup
								</span>
							</div>
						</Grid>
					</Grid>
				</form>
			</FormControl>
		</LoginRightWrapper>
	);
};

export default Right;
