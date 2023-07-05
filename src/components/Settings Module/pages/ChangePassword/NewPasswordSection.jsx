import { Key, SaveAs } from "@mui/icons-material";
import { Divider, IconButton, InputBase, Paper, Tooltip } from "@mui/material";
import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useMutation } from "@tanstack/react-query";
import { changePassword } from "./Queries/ChangePassword";
import check from "./static/Checkpassword";
import { useDispatch } from "react-redux";
import { SetSuccessAlert, SetSuccessAlertMsg } from "../../../AuthModule/slices/ErrorMessages";
const NewPasswordSection = (props) => {
	const dispatch = useDispatch();
	const [text, setText] = useState("");
	const [error, setError] = useState(false);
	const mutation = useMutation(changePassword, {
		onSuccess: () => {
			dispatch(SetSuccessAlertMsg("Password Changed Successfully!!!"));
			dispatch(SetSuccessAlert(true));
		},
		onError: (e) => {
			console.log(e);
		},
	});
	return (
		<>
			<Paper
				component="form"
				sx={{
					p: "2px 4px",
					display: "flex",
					alignItems: "center",
					background: "#ecebeb",
					width: 300,
				}}
			>
				<IconButton sx={{ p: "10px" }} aria-label="menu" disabled>
					<Key />
				</IconButton>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder="New Password"
					inputProps={{ "aria-label": "search google maps" }}
					disabled={props.disable}
					value={text}
					type="password"
					onChange={(e) => {
						setText(e.target.value);
						if (check(e.target.value, e.target.value)) {
							setError(false);
						} else {
							setError(true);
						}
					}}
				/>

				<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
				<Tooltip title="Save Password">
					<LoadingButton
						color="primary"
						sx={{ p: "10px" }}
						aria-label="directions"
						disabled={props.disable}
						loading={mutation.isLoading}
						onClick={() => {
							if (!error && text != "") {
								mutation.mutate({
									new_password: text,
									user_id: localStorage.getItem("user_id"),
								});
							}
						}}
					>
						<SaveAs sx={{ color: "rgb(88,88,252)" }} />
					</LoadingButton>
				</Tooltip>
			</Paper>
			<div>
				<span
					style={{ color: error ? "red" : "black" }}
				>{`Password must include one number and one symbol with minimum of 4 alphabet`}</span>
			</div>
		</>
	);
};

export default NewPasswordSection;
