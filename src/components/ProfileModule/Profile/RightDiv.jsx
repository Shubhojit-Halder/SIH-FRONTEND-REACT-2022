import React, { useState } from "react";
import Button from "@mui/material/Button";
import CallMadeIcon from "@mui/icons-material/CallMade";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { useEffect } from "react";
import axios from "axios";
import { openPI } from "../slices/PiSlice";
import RightdivWrapper from "../styles/RightDiv..styled";
import Followers from "../../HomeModule/ccomponents_home/Followers";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { openFollowerList } from "../../FriendsModule/slices/FollowerListSlice";

const RightDiv = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [address, setAddress] = useState("Undefined");
	// useEffect(() => {
	//   axios
	//     .post("http://localhost:8000/getaddress/", {
	//       id: localStorage.getItem("id"),
	//     })
	//     .then((response) => {
	//       // console.log(response.data);
	//       setAddress(response.data.city);
	//     });
	// }, []);
	return (
		<RightdivWrapper>
			<div className="main">
				<div className="upper">
					<p>
						Intro{" "}
						<span>
							{" "}
							<Button
								variant="contained"
								endIcon={<CallMadeIcon fontSize="10px" color="action" />}
								color="inherit"
								style={{
									borderRadius: "40px",
									fontSize: "10px",
									padding: "5px 10px",
								}}
								onClick={() => {
									dispatch(openPI(true));
								}}
								className="seeallbtn"
							>
								See All
							</Button>
						</span>{" "}
					</p>

					<ul>
						<li>
							<WorkOutlineOutlinedIcon />
							<span>No workplace to show</span>
						</li>
						<li>
							<SchoolOutlinedIcon />
							<span>Meghnad Saha Institute of Technology</span>
						</li>
						<li>
							<LocationOnOutlinedIcon />
							<span>{address}</span>
						</li>
						<li></li>
					</ul>
				</div>
			</div>
		</RightdivWrapper>
	);
};

export default RightDiv;
