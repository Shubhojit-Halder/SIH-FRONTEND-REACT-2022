import { IconButton, Snackbar } from "@mui/material";
import React from "react";
import GeneralTable from "./GeneralTable";
import MenuIcon from "@mui/icons-material/Menu";
import WrapGeneral from "./styles/General.styled";
import { open } from "../../slices/SettingListSlice";
import { useDispatch, useSelector } from "react-redux";
const General = ({ state2 }) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.settinglist.value);
	return (
		<WrapGeneral>
			<div className="main">
				<div className="heading">
					<span className="headingtext">General Settings </span>
					{state2 ? (
						<IconButton
							onClick={() => {
								dispatch(open(!state));
							}}
						>
							<MenuIcon />
						</IconButton>
					) : (
						<></>
					)}
				</div>
				<div className="body">
					<GeneralTable state2={!state2} />
				</div>
			</div>
		</WrapGeneral>
	);
};

export default General;
