import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { Paper } from "@mui/material";
import GroupPageWrapper from "../styles/Grouppage.styled";
import Navbar from "../../nav_and_fc/navbar_component/Navbar";
import ContentContainer from "../../HomeModule/ccomponents_home/Content/contentContainer";
import Post from "../../HomeModule/ccomponents_home/post";
import { Helmet } from "react-helmet";
const Grouppage = () => {
	const [div, setDiv] = useState(false);
	useEffect(() => {
		var div = document.getElementsByClassName("wholePage");
		div.onscroll = () => {
			if (div.scrollTop > 1000) {
				setDiv(true);
			} else {
				setDiv(false);
			}
		};
	}, []);

	return (
		<>
			<Helmet>
				<title>DaakTicket | Groups</title>
				<meta name="grouppage" content="Group page" />
			</Helmet>
			<Navbar />
			<GroupPageWrapper>
				<div className="wholePageGrouppage">
					<Grid
						container
						spacing={2}
						display="flex"
						justifyContent="center"
						alignItems="center"
						marginTop={10}
					>
						<Grid item xs={12} sm={12} md={12} className="imageGridGrouppage">
							<div className="mainGrouppage">
								<div className="imageDivGrouppage">
									<IconButton
										className="backBtnGrouppage"
										sx={{ position: "absolute", left: "0%" }}
									>
										<ArrowBackIosRoundedIcon />
									</IconButton>
									<img
										className="CoverImgGrouppage"
										src="https://images.unsplash.com/photo-1658312228094-d598e76edcbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
										alt=""
									/>
									<img
										className="profileImageGrouppage"
										src="https://images.unsplash.com/photo-1658317222501-775c4e6a8464?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
										alt=""
									/>
								</div>

								<div className="profileNameGrouppage">
									<div className="nameContainerGrouppage">
										<div className="nameGrouppage">
											HexaOverflow
											<br />
										</div>
										<div className="identityGrouppage">Group of MSIT</div>
										<div className="editingButtonsGrouppage">
											<Button
												variant="contained"
												color="primary"
												className="joinBtngrpPage"
												sx={{
													width: "170px",
													bgcolor: "#5858fc",
													"&:hover": { bgcolor: "#3939ff" },
												}}
											>
												<EditOutlinedIcon />
												Join
											</Button>
											<Button
												variant="outlined"
												className="editBtnsGrouppage"
												sx={{ margin: "10px" }}
												padding="5px 30px"
											>
												<PeopleAltOutlinedIcon />
												Admins
											</Button>
											<Button
												variant="outlined"
												className="editBtnsGrouppage"
												padding="5px 30px"
											>
												<PeopleAltOutlinedIcon /> Posts
											</Button>
										</div>
									</div>
								</div>
							</div>
						</Grid>
						<Grid
							item
							xs={10}
							sm={8}
							md={6}
							// sx={{ mt: 0, padding: 5,display:"flex",justifyContent:"center",alignItems:"center"}}
							// className="aboutpaperDivGrouppage"
						>
							<Paper sx={{ padding: "20px" }}>
								<div className="aboutheaderGrouppage">About</div>
								<div className="aboutcontentGrouppage">
									<span className="des1Grouppage">
										Number of participants:6969
									</span>
									<br />
									<span className="des2Grouppage">
										<div>Group Description:</div>
										We are team hexaoverflow.We won the prelims and now we are
										the finalists of SIH.Wish us good luck.
									</span>
								</div>
							</Paper>
						</Grid>
						<Grid
							item
							xs={10}
							sm={8}
							md={7}
							sx={{ marginTop: 12 }}
							className="contentsGrouppage"
						>
							<Paper sx={{ marginTop: "-100px", paddingTop: 5, width: "100%" }}>
								<Post />
							</Paper>
							<ContentContainer />
						</Grid>
					</Grid>
				</div>
			</GroupPageWrapper>
		</>
	);
};

export default Grouppage;
