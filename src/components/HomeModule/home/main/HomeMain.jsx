import { Fab, Grid, MenuList, Paper, Snackbar } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Navbar from "../../../nav_and_fc/navbar_component/Navbar";
import ContentContainer from "../../ccomponents_home/Content/contentContainer";
import FollowersComponent from "../../ccomponents_home/FollowersComponent";
import FollowRequests from "../../ccomponents_home/FollowRequests";
import Hashtags from "../../ccomponents_home/Hashtags";
import Menulist from "../../ccomponents_home/menulist";
import Post from "../../ccomponents_home/post";
import Profile from "../../ccomponents_home/profile";
import { useSelector, useDispatch } from "react-redux";
import { open } from "../slices/homeSlice";
import FloatingDiv from "../../ccomponents_home/FloatingDiv";
import FloatingMenu from "../../ccomponents_home/FloatingMenu";
import HomeWrapper from "../styles/HomeMain.styled";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import TxtandSharePostShower from "../../ccomponents_home/TextEditorANDpostShareShow/TxtandSharePostShower";
import SeeAll from "../../ccomponents_home/SeeAll/SeeAll";
import FloatChatWrapper from "../../../floatchat/FloatChatWrapper";
import SpeakModuleContainer from "../../ccomponents_home/SpeakModule/SpeakModuleContainer";
import SnackbarDisp from "../../../AuthModule/SnackbarDisp";
const HomeMain = () => {
	const navigate = useNavigate();
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		if (!localStorage.getItem("logged_in")) {
			navigate("/auth/login");
			// navigate("/welcome");
		}
	}, []);
	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 4500);
	}, []);
	const dispatch = useDispatch();
	return (
		<>
			<>
				<Helmet>
					<title>DaakTicket | Home</title>
					<meta name="Home" content="Homepage" />
				</Helmet>
				<Navbar />

				<HomeWrapper>
					<TxtandSharePostShower />
					<SnackbarDisp />
					<SeeAll />
					<div
						className="main-home"
						onScroll={(e) => {
							if (e.target.scrollTop > 900) {
								dispatch(open(true));
							} else {
								dispatch(open(false));
							}
						}}
						id="main"
					>
						<Grid container spacing={2}>
							<Grid item xs={0} sm={0} md={0} lg={3}>
								<Box>
									<Paper
										elevation={1}
										className="section6"
										style={{ minHeight: "250px", marginLeft: "10px" }}
									>
										<Profile />
									</Paper>
								</Box>
								<Box mt={1}>
									<Paper
										elevation={1}
										className="section1"
										style={{ marginLeft: "10px" }}
									>
										<Hashtags />
									</Paper>
								</Box>
								<Paper
									elevation={1}
									id="section4"
									className="section4"
									style={{ height: "320px", marginLeft: "10px" }}
								>
									<Menulist></Menulist>
								</Paper>
								<FloatingMenu />
							</Grid>
							{/*Left Section and Mid Section*/}
							<Grid item xs={12} sm={11} md={7} lg={6}>
								<div className="postContainer">
									<div className="containerSection2">
										<Paper
											elevation={1}
											style={{
												height: "130px",
												marginBottom: "30px",
											}}
											className="section2c"
										>
											<Post />
										</Paper>
									</div>
									<ContentContainer />
									<div className="gap"></div>
								</div>
							</Grid>
							{/* Mid section and right section */}

							<Grid item xs={0} sm={0} md={4} lg={3}>
								<div className="containerSection34">
									<Paper elevation={1} className="section3">
										<FollowersComponent />
									</Paper>
									<Paper elevation={1} className="section5">
										<FollowRequests />
									</Paper>
									{/* <Paper elevation={1} className="section5"> */}
									<FloatingDiv />
									{/* </Paper> */}
								</div>
							</Grid>
						</Grid>
					</div>

					<FloatChatWrapper />
				</HomeWrapper>
			</>
		</>
	);
};

export default HomeMain;
