import { Drawer, Paper, SwipeableDrawer } from "@mui/material";
import React, { useEffect } from "react";
import General from "./pages/General/General";
import Settinglist from "./Settinglist";
import SettingsWrapper from "./styles/Settings.styled";
import Navbar from "../nav_and_fc/navbar_component/Navbar";
import { open } from "./slices/SettingListSlice";
import { useSelector, useDispatch } from "react-redux";
import Changepassword from "./pages/ChangePassword/Changepassword";
import { motion } from "framer-motion";
import SettingRouter from "./SettingRouter";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import SnackbarDisp from "../AuthModule/SnackbarDisp";
const Settings = () => {
	const [state2, setState2] = React.useState(false);
	const navigate = useNavigate();
	const state = useSelector((state) => state.settinglist.value);
	const dispatch = useDispatch();
	useEffect(() => {
		if (window.innerWidth <= 900) {
			setState2(true);
			dispatch(open(false));
		}
		if (!localStorage.getItem("logged_in")) {
			navigate("/auth/login");
		}
	}, []);
	return (
		<>
			<Helmet>
				<title>DaakTicket | Settings</title>
				<meta name="Landing" content="Landing page" />
			</Helmet>
			<Navbar />
			<SettingsWrapper>
			<SnackbarDisp/>

				<div className="griderbap">
					<div className="grid">
						{!state2 ? (
							<Paper
								className="settingoptions"
								elevation={3}
								style={{
									display: "block",

									// paddingTop: "30px",
								}}
							>
								<Settinglist state2={state2} />
							</Paper>
						) : (
							<>
								<SwipeableDrawer
									open={state}
									onClose={() => {
										dispatch(open(false));
									}}
									style={{ width: "300px" }}
								>
									<Paper
										className="settingoptions"
										elevation={3}
										style={{
											display: "block",
											height: "100%",
											paddingTop: "20px",
											width: "270px",
										}}
									>
										<Settinglist state2={state2} />
									</Paper>
								</SwipeableDrawer>
							</>
						)}
						{<SettingRouter state2={state2} />}
						{/* <Changepassword state2={state2} /> */}
					</div>
				</div>
			</SettingsWrapper>
		</>
	);
};

export default Settings;
