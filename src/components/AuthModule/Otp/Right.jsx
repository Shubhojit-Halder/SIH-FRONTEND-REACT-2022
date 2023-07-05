import { Email, Password } from "@mui/icons-material";
import {
	Autocomplete,
	Button,
	FormControl,
	Grid,
	Input,
	InputAdornment,
	TextField,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Box } from "@mui/system";
import React, { useState } from "react";
import styled from "styled-components";
import LoginRightWrapper from "../styles/LoginRight.styled";
import PinIcon from "@mui/icons-material/Pin";
import Key from "@mui/icons-material/Key";
import OtpSendButton from "./OtpSendButton";
import OtpVarificationButton from "./OtpVarificationButton";
import SnackbarDisp from "../SnackbarDisp";
const Right = () => {
	const [inputValue, setInputValue] = useState("");
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	return (
		<LoginRightWrapper>
			<SnackbarDisp/>
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
								<TextField
									id="outlined-basic"
									label="Enter Your OTP"
									variant="standard"
									helperText={
										errorMessage
											? errorMessage
											: "Enter the one time password which we have sent to your Email"
									}
									value={inputValue}
									error={error}
									onChange={(e) => {
										setInputValue(e.target.value);
									}}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<Key />
											</InputAdornment>
										),
									}}
								/>
								<OtpSendButton />
							</Box>
							<div className="regButton">
								<OtpVarificationButton
									data={inputValue}
									errors={{ setError, setErrorMessage }}
								/>
							</div>
						</Grid>
					</Grid>
				</form>
			</FormControl>
		</LoginRightWrapper>
	);
};

export default Right;
