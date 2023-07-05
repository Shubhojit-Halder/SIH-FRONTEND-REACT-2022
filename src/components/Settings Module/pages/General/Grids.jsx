import React from "react";
import { Box, Fab, Grid, Tooltip } from "@mui/material";
import { EditSharp } from "@mui/icons-material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editName } from "./Queries/EditUser";
import GeneralTableWrapper from "./styles/GeneralTable.styled";
import { useDispatch } from "react-redux";
import { SetSuccessAlert, SetSuccessAlertMsg } from "../../../AuthModule/slices/ErrorMessages";
const Grids = (props) => {
	const dispatch = useDispatch();
	const client = useQueryClient();
	const mutation = useMutation(editName, {
		onSuccess: (e) => {
			client.invalidateQueries(["user_details"]);
			client.invalidateQueries(["user_details_settings"]);
			if (props.value.name == "name") {
				dispatch(SetSuccessAlertMsg("Username Changed Successfully!!"));
				dispatch(SetSuccessAlert(true));
			}
			if (props.value.name == "email") {
				dispatch(SetSuccessAlertMsg("Email Changed Successfully!!"));
				dispatch(SetSuccessAlert(true));
			}
			if (props.value.name == "mobile") {
				dispatch(SetSuccessAlertMsg("Mobile No. Changed Successfully!!"));
				dispatch(SetSuccessAlert(true));
			}
		},
	});
	return (
		<GeneralTableWrapper>
			<Grid
				key={props.index}
				container
				style={{
					alignItems: "center",
					padding: "5px 15px",
				}}
				className={props.value.value % 2 === 0 ? "grid2" : "grid3"}
			>
				<Grid item xs={3}>
					{props.value.name.toLocaleUpperCase()}
				</Grid>
				<Grid
					item
					xs={9}
					style={{
						justifyContent: "center",
						width: "100%",
					}}
				>
					<Box className="input">
						{props.children}
						<Tooltip title={`Click To Save ${props.value.name}`}>
							<Fab
								disabled={props.disable}
								size="small"
								sx={{
									position: "absolute",
									color: "#ffffff",
									backgroundColor: "rgb(88,88,252)",
									"&:hover": { color: "rgb(88,88,252)" },
								}}
								onClick={() => {
									switch (props.value.name) {
										case "name":
											mutation.mutate({
												new_name: props.data,
												user_id: localStorage.getItem("user_id"),
											});
											break;
										case "email":
											mutation.mutate({
												new_email: props.data,
												user_id: localStorage.getItem("user_id"),
											});
											break;
										case "mobile":
											mutation.mutate({
												new_mobile: props.data,
												user_id: localStorage.getItem("user_id"),
											});
											break;
										default:
											break;
									}
								}}
							>
								<EditSharp />
							</Fab>
						</Tooltip>
						{/* </div> */}
					</Box>
				</Grid>
			</Grid>
		</GeneralTableWrapper>
	);
};

export default Grids;
