import * as React from "react";
import Button from "@mui/material/Button";
import { Box, InputAdornment, TextField, Tooltip } from "@mui/material";
import { Key, SaveAs } from "@mui/icons-material";
import GeneralTableWrapper from "./styles/ChangepasswordTable.styled";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { getAccess } from "./Queries/GetAccess";
import { useMutation } from "@tanstack/react-query";
import NewPasswordSection from "./NewPasswordSection";
export default function BasicTable({ state2 }) {
	const [helperText, setHelperText] = React.useState("");
	const [disable, setDisable] = useState(true);
	const [error, setError] = useState(false);
	const [text, setText] = useState("");
	const mutation = useMutation(getAccess, {
		onSuccess: () => {
			setDisable(false);
			setHelperText("Edit access granted");
			setError(false);
		},
		onError: () => {
			setError(true);
			setHelperText("Password Is Not Valid");
		},
	});
	return (
		<>
			<GeneralTableWrapper>
				<Box className="password_input">
					<NewPasswordSection disable={disable} />
				</Box>
				<Box className="password_entry">
					<span>
						{`If you want to change your Password. you have to enter your old
						password in the given password input section and you have to
						generate edit access.`}
					</span>
					<TextField
						type="password"
						placeholder="Enter Password"
						error={error}
						variant="standard"
						helperText={helperText}
						color="primary"
						value={text}
						onChange={(e) => {
							setText(e.target.value);
						}}
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
