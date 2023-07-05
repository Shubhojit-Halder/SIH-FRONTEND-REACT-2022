import React from "react";
import { IconButton, ListSubheader } from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import logo from "../static/logo_daakticket.png";
import styled from "styled-components";
import { open } from "../../slices/Sidebarslice";
import { useDispatch } from "react-redux";
const Sidenavheader = () => {
	const Wrap = styled.div`
		height: 75px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	`;
	const dispatch = useDispatch();
	return (
		<ListSubheader>
			<Wrap>
				<div className="logo">
					<IconButton
						onClick={() => {
							// dispatch({ type: "sidenav" });
							dispatch(open(false));
						}}
					>
						<Menu />
					</IconButton>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						paddingLeft: "20px",
					}}
				>
					<img src={logo} alt="logo of website" width="auto" height="30px" />
				</div>
			</Wrap>
		</ListSubheader>
	);
};

export default Sidenavheader;
