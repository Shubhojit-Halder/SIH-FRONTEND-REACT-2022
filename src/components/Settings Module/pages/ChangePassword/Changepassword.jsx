import { IconButton } from "@mui/material";
import React from "react";
import GeneralTable from "./ChangepasswordTable";
import MenuIcon from "@mui/icons-material/Menu";
import WrapGeneral from "./styles/Changepassword.styled";
import { open } from "../../slices/SettingListSlice";
import { useDispatch, useSelector } from "react-redux";
const Changepassword = ({ state2 }) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.settinglist.value);
	return (
		<WrapGeneral>
			<div className="main">
				<div className="heading">
					<span className="headingtext">Password Settings </span>
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

export default Changepassword;
