import * as React from "react";
import Button from "@mui/material/Button";
import { Box, InputAdornment, TextField } from "@mui/material";
import { Key } from "@mui/icons-material";
import GeneralTableWrapper from "./styles/GeneralTable.styled";
import Grids from "./Grids";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAccess } from "./Queries/GetAccess";
import { LoadingButton } from "@mui/lab";
import HandleChange from "./statics/HandleChange";
import getUser from "./Queries/Getuser";
export default function BasicTable({ state2 }) {
	const [state, setState] = React.useState(false);
	const [helperText, setHelperText] = React.useState("");
	const [disable, setDisable] = React.useState(true);
	const [text, setText] = React.useState("");
	const [data, setData] = React.useState({ name: "", email: "", mobile: "" });
	const mutation = useMutation(getAccess, {
		onSuccess: () => {
			setDisable(false);
			setState(false);
			setHelperText("Edit access granted");
		},
		onError: () => {
			setState(true);
			setHelperText("Password Is not Valid");
		},
	});
	const query = useQuery(["user_details_settings"], getUser, {
		onSuccess: (e) => {
			console.log(e.data);
			setData({
				name: e.data.full_name,
				email: e.data.email,
				mobile: e.data.mobile,
			});
		},
	});
	return (
		<>
			<GeneralTableWrapper>
				{[
					{ value: 1, name: "name", text: data.name },
					{ value: 2, name: "email", text: data.email },
					{ value: 3, name: "mobile", text: data.mobile },
				].map((value, index) => {
					return (
						<Grids
							value={value}
							index={index}
							disable={disable}
							data={value.text}
						>
							<input
								type="text"
								className="name_input"
								disabled={disable}
								value={value.text}
								onChange={(e) => {
									HandleChange(e, value.name, setData);
								}}
							/>
						</Grids>
					);
				})}
				<Box className="password_entry">
					<span>
						If you want to change your Username/Email/Mobile No. you have to
						enter your password in the given password input section and you have
						to generate edit access.
					</span>
					<TextField
						type="password"
						value={text}
						onChange={(e) => {
							setText(e.target.value);
						}}
						placeholder="Enter Password"
						error={state}
						variant="standard"
						helperText={helperText}
						color="primary"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<Key />
								</InputAdornment>
							),
						}}
					/>
					<br />
					<LoadingButton
						loading={mutation.isLoading}
						className="access"
						variant="contained"
						sx={{
							bgcolor: "rgb(88,88,252)",
							"&:hover": { bgcolor: "#4646da" },
						}}
						onClick={() => {
							mutation.mutate({
								user_id: localStorage.getItem("user_id"),
								password: text,
							});
						}}
					>
						Get Edit Access
					</LoadingButton>
				</Box>
			</GeneralTableWrapper>
		</>
	);
}
