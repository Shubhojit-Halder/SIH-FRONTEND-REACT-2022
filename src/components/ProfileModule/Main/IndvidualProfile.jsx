import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import LeftDiv from "../Profile/LeftDiv";
import RightDiv from "../Profile/RightDiv";
import Wrapper from "../styles/IndividualProfile.styled";
import Navbar from "../../nav_and_fc/navbar_component/Navbar";
import ContentContainer from "../../HomeModule/ccomponents_home/Content/contentContainer";
import biodata from "../Datas/biodata";
import EditDp from "../Profile/AllEdits/EditDp";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useDispatch, useSelector } from "react-redux";
import { openCropper } from "../slices/dpSlice";
import Helmet from "react-helmet";
import { useNavigate } from "react-router";
import PersonalInfoContainer from "../Profile/AllPersonal/PersonalInfoContainer";
import NameAndHeadline from "../Profile/IndividualProfileComponents/NameAndHeadline";
import Main from "../Profile/IndividualProfileComponents/Main";
import TxtandSharePostShower from "../../HomeModule/ccomponents_home/TextEditorANDpostShareShow/TxtandSharePostShower";
const IndvidualProfile = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.dp.value);
	const PiState = useSelector((state) => state.PiSlicing.value);
	const navigate = useNavigate();

	return (
		<>
			<Helmet>
				<title>DaakTicket | Your Profile</title>
				<meta name="Landing" content="Landing page" />
			</Helmet>
			<TxtandSharePostShower />
			<Wrapper>
				{PiState ? (
					<div
						style={{ width: "100vw", position: "fixed", zIndex: "1100000000" }}
					>
						<PersonalInfoContainer />
					</div>
				) : (
					<></>
				)}
				<div className="wholePageIndPage">
					<Navbar />
					<Grid
						container
						spacing={0}
						sx={{
							mt: "75px",
							display: state ? "flex" : "",
							justifyContent: "center",
						}}
					>
						{state ? (
							<EditDp />
						) : (
							<>
								<Main />
							</>
						)}
					</Grid>
				</div>
			</Wrapper>
		</>
	);
};
export default IndvidualProfile;
