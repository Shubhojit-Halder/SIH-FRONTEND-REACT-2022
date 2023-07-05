import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import LeftDiv from "../Profile/LeftDiv";
import OtherProfileRightDiv from "../Profile/OtherProfileRightDiv";
import OtherprofileWrapper from "../styles/Otherprofile.styled";
import Navbar from "../../nav_and_fc/navbar_component/Navbar";

import CameraOutlinedIcon from "@mui/icons-material/CameraOutlined";
import biodata from "../Datas/biodata";
import { Helmet } from "react-helmet";
import NameAndHeadline from "../Profile/OthersProfileComponents/NameAndHeadline";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProfileImage from "../Profile/OthersProfileComponents/ProfileImage";
import CoverPicture from "../Profile/OthersProfileComponents/CoverPicture";
import MessageOnWrapper from "../Profile/Message/MessageOnWrapper";
import { useSelector } from "react-redux";
import ContentContainer from "../Profile/Content/contentContainer";
const Otherprofile = (props) => {
	const MsgReqState = useSelector((state) => state.msgreq.value);
	const params = useParams();
	function getData() {
		return axios.get("http://localhost:8000/getuserbyid/" + params.id + "/");
	}
	const query = useQuery(["others_profile", params], getData, {
		staleTime: 60000,
	});
	console.log(props);
	return (
		<>
			<Helmet>
				<title>DaakTicket | Profiles</title>
				{/* <meta name="Landing" content="Landing page" /> */}
			</Helmet>
			<OtherprofileWrapper>
				{MsgReqState ? (
					<div
						style={{ width: "100vw", position: "fixed", zIndex: "1100000000" }}
					>
						<MessageOnWrapper
							socket={props.socket}
							user_id={query.isSuccess ? query.data.data.user_id : ""}
							user_name={query.isSuccess ? query.data.data.full_name : ""}
						/>
					</div>
				) : (
					<></>
				)}
				<div className="wholePageOthprof">
					<Navbar />
					<Grid container spacing={0} sx={{ mt: "75px" }}>
						<Grid item xs={0} sm={0} md={3} className="leftDivOthprof">
							<LeftDiv />
						</Grid>

						<Grid item xs={12} sm={12} md={6.2} sx={{ mb: 10, mx: 1 }}>
							<div className="mainOthprof">
								<div className="imageDivOthprof">
									<div className="coverImgDivOthprof">
										<IconButton
											className="backBtnOthprof"
											sx={{
												position: "absolute",
											}}
										>
											<ArrowBackIosRoundedIcon />
										</IconButton>
										<CoverPicture
											user_id={query.isSuccess ? query.data.data.user_id : ""}
										/>
									</div>
									<ProfileImage
										user_id={query.isSuccess ? query.data.data.user_id : ""}
									/>
								</div>
								<NameAndHeadline
									name={
										query.isSuccess ? query.data.data.full_name : "Loading..."
									}
									headline={"Loading..."}
								/>
							</div>
						</Grid>
						<Grid item xs={0} sm={0} md={2.5} className="PhotosGridOthprof">
							<OtherProfileRightDiv />
						</Grid>
						<Grid item xs={12} sm={12} md={12} className="BioGridOthprof">
							<div className="bioDataOthprof">{biodata}</div>
						</Grid>

						<Grid
							item
							xs={12}
							sm={12}
							md={12}
							sx={{ mx: 1, mt: 15 }}
							className="contents"
						>
							<ContentContainer user_id={params.id} />
						</Grid>
					</Grid>
				</div>
			</OtherprofileWrapper>
		</>
	);
};

export default Otherprofile;
