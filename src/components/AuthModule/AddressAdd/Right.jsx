import { NumbersOutlined } from "@mui/icons-material";
import {
	Autocomplete,
	FormControl,
	Grid,
	InputAdornment,
	TextField,
} from "@mui/material";
import countries from "../static/Js/Contries";
import { Box } from "@mui/system";
import React, { useState } from "react";
import LoginRightWrapper from "../styles/LoginRight.styled";
import AddressAddBtn from "./AddressAddBtn";
import HandleChange from "./HandleOnChange";

const Right = () => {
	const [data, setData] = useState({ pin_code: "", dob: "", country: "" });
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
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
						mt={1}
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
									label="Postal Code"
									variant="standard"
									type="number"
									helperText="Enter your Postal Code"
									required
									value={data.pin_code}
									onChange={(e) => {
										HandleChange(e, "pin_code", setData);
									}}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<NumbersOutlined />
											</InputAdornment>
										),
									}}
								/>
								<Autocomplete
									disablePortal
									id="combo-box-demo"
									options={countries}
									value={data.country}
									onChange={(event, newValue) => {
										setData((prev) => {
											return { ...prev, country: newValue };
										});
									}}
									renderInput={(params) => (
										<TextField
											{...params}
											id="standard-basic"
											variant="standard"
											helperText="Enter your Country Name"
											required
											placeholder="Country Name"
											type="text"
										/>
									)}
								/>
								<TextField
									id="standard-basic"
									variant="standard"
									helperText={
										errorMessage ? errorMessage : "Enter your Date of Birth"
									}
									required
									type="date"
									error={error}
									value={data.dob}
									onChange={(e) => {
										HandleChange(e, "dob", setData);
									}}
								/>
							</Box>
							<div
								className="regButton"
								style={{
									position: "absolute",
									left: "50%",
									transform: "translate(-50%,0)",
								}}
							>
								<AddressAddBtn data={data} errorHandler={{setError,setErrorMessage}}/>
							</div>
						</Grid>
					</Grid>
				</form>
			</FormControl>
		</LoginRightWrapper>
	);
};

export default Right;
