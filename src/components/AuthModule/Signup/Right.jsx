import { Autocomplete, FormControl, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import RightWrapper from "../styles/Right.styled";
import check from "../static/Js/Checkpassword";
import { useNavigate } from "react-router";
import HandleChange from "./HandleChange";
import RegisterBtn from "./RegisterBtn";
const Right = () => {
	const [inputValue, setInputValue] = useState("");
	const [data, setData] = useState({
		full_name: "",
		email: "",
		password: "",
		mobile: "",
		gender: "",
		confirm_password: "",
	});
	const navigate = useNavigate();
	const [passwordFormat, setPasswordFormat] = useState(true);
	return (
		<RightWrapper>
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
						<Grid item xs={12} sm={6}>
							<Box className="inputs">
								<TextField
									id="outlined-basic"
									label="Name"
									variant="standard"
									helperText="Enter your Full Name"
									required
									value={data.full_name}
									onChange={(e) => {
										HandleChange(e, "name", setData);
									}}
								/>
								<TextField
									id="standard-basic"
									label="Mobile"
									variant="standard"
									helperText="Enter your Mobile Number"
									required
									type="number"
									value={data.mobile}
									onChange={(e) => {
										HandleChange(e, "mobile", setData);
									}}
								/>
								<TextField
									id="standard-basic"
									label="Password"
									variant="standard"
									helperText="Minimum of 8 character including numbers, symbols & minimum 4 alphabets"
									required
									type="password"
									value={data.password}
									error={!passwordFormat}
									onChange={(e) => {
										if (!check(e.target.value, e.target.value)) {
											setPasswordFormat(false);
										} else {
											setPasswordFormat(true);
										}
										HandleChange(e, "password", setData);
									}}
								/>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box className="inputs inputs2">
								<TextField
									id="outlined-basic"
									label="Email"
									type="email"
									variant="standard"
									helperText="Enter your Email Address"
									required
									value={data.email}
									onChange={(e) => {
										HandleChange(e, "email", setData);
									}}
								/>
								<Autocomplete
									value={inputValue}
									onChange={(event, newValue) => {
										setData((prev) => {
											return { ...prev, gender: newValue };
										});
										setInputValue(newValue);
									}}
									id="controllable-states-demo"
									options={["Male", "Female", "Other"]}
									renderInput={(params) => (
										<TextField
											{...params}
											label="Gender"
											variant="standard"
											required
											helperText="Select your Gender"
										/>
									)}
								/>
								<TextField
									id="standard-basic"
									label="Confirm Password"
									variant="standard"
									helperText="Re enter your Password"
									required
									type="password"
									value={data.confirm_password}
									onChange={(e) => {
										HandleChange(e, "confirm_password", setData);
									}}
								/>
								<span className="redirect-login">
									Already Have an Account ?
									<span
										onClick={() => {
											navigate("/auth/login");
										}}
									>
										Login
									</span>
								</span>
							</Box>
						</Grid>
					</Grid>
					<div className="regButton">
						<RegisterBtn data={data} />
					</div>
				</form>
			</FormControl>
		</RightWrapper>
	);
};

export default Right;
