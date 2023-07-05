import { ArrowBackIosRounded, CameraAlt } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React from "react";
import ContentContainer from "../Content/contentContainer";
import { openCropper } from "../../slices/dpSlice";
import LeftDiv from "../LeftDiv";
import RightDiv from "../RightDiv";
import NameAndHeadline from "./NameAndHeadline";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../../Queries/GetUserData";
import ProfileImage from "./ProfileImage";
import { openDropzoneCoverPic } from "../../slices/CoverselectSlice";
import CoverphotoEdit from "../AllEdits/CoverphotoEdit";
import CoverPhoto from "./CoverPhoto";
const Main = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.CoverChngSlice.value);
	const query = useQuery(["profile_page", "get_user"], getUserData, {
		staleTime: 30000,
	});
	return (
		<>
			{state ? <CoverphotoEdit /> : <></>}
			<Grid item xs={0} sm={0} md={3} className="leftDivIndPage">
				<LeftDiv />
			</Grid>

			<Grid item xs={12} sm={12} md={6.2} sx={{ mb: 10, mx: 1 }}>
				<div className="mainIndPage">
					<div className="imageDivIndpage">
						<div className="coverImgDivIndpage">
							<IconButton
								className="backBtnIndpage"
								sx={{
									position: "absolute",
								}}
							>
								<ArrowBackIosRounded />
							</IconButton>
							<CoverPhoto
								user_id={query.isSuccess ? query.data.data.user_id : ""}
							/>
							<IconButton
								sx={{
									position: "absolute",
									color: "#000",
								}}
								onClick={() => {
									dispatch(openDropzoneCoverPic(true));
								}}
							>
								{/* <CameraOutlinedIcon /> */}
								<CameraAlt />
							</IconButton>
						</div>
						<ProfileImage />
					</div>

					<NameAndHeadline
						name={query.isSuccess ? query.data.data.full_name : "Loading..."}
						headline={"MSIT"}
					/>
				</div>
			</Grid>
			<Grid item xs={0} sm={0} md={2.5} className="PhotosGridIndPage">
				<RightDiv />
			</Grid>
			<Grid item xs={12} sm={12} md={12} className="BioGridIndPage">
				<div className="bioDataIndPage">{"biodata"}</div>
			</Grid>

			<Grid
				item
				xs={12}
				sm={12}
				md={12}
				sx={{ mx: 1, mt: 15 }}
				className="contentsIndPage"
			>
				<ContentContainer user_id={localStorage.getItem("user_id")} />
			</Grid>
		</>
	);
};

export default Main;
