import React from "react";
import Drawer from "@mui/material/Drawer";
import ListForDrawer from "./ListForDrawer";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { open } from "../../slices/Sidebarslice";
const Sidenav = () => {
	const dispatch = useDispatch();
	// const { state, dispatch } = useContext(Val);
	// const drawer = useSelector((state) => state.drawer.value);
	const state = useSelector((state) => state.navbar.value);
	const Wrapper = styled.div`
		overflow-y: scroll;
		/* background-color: red; */
		/* padding-right: 10px; */

		&::-webkit-scrollbar {
			width: 8px;
			border-radius: 10px;
		}
		&::-webkit-scrollbar-thumb {
			border: 2px solid transparent;
			border-radius: 10px;
			background-color: rgba(0, 0, 0, 0.502);
			background-clip: content-box;
		}
	`;

	return (
		<div>
			<Drawer
				open={state}
				onClose={() => {
					// dispatch({ type: "sidenav" });
					dispatch(open(false));
				}}
				// anchor="right"
				// hideBackdrop={true}
			>
				<Wrapper>
					<ListForDrawer />
				</Wrapper>
			</Drawer>
		</div>
	);
};

export default Sidenav;
