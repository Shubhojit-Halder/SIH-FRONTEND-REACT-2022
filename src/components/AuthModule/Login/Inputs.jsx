import { Email, Password } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const Inputs = (props) => {
	return (
		<>
			<TextField
				id="outlined-basic"
				label="Email"
				variant="standard"
				helperText="Enter your registered Email ID"
				required
				value={props.email}
				onChange={(e) => {
					props.setData((prev) => {
						return { ...prev, email: e.target.value };
					});
				}}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<Email />
						</InputAdornment>
					),
				}}
			/>

			<TextField
				id="standard-basic"
				label="Password"
				variant="standard"
				helperText="Enter your Password"
				required
				type="password"
				value={props.password}
				onChange={(e) => {
					props.setData((prev) => {
						return { ...prev, password: e.target.value };
					});
				}}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<Password />
						</InputAdornment>
					),
					className: "input_field",
				}}
			/>
		</>
	);
};

export default Inputs;
