import React, { useEffect } from "react";
import Followers from "./Followers";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CallMadeIcon from "@mui/icons-material/CallMade";
import styled from "styled-components";
import FollowerStyledWrap from "../home/styles/Followers.styled";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Openseeall } from "../home/slices/OpenSEEALL";
import HandshakeIcon from "@mui/icons-material/Handshake";
import Cancel from "@mui/icons-material/Cancel";
import FollowRequestsContainer from "./pending_requests/FollowRequestsContainer";
const FollowRequests = () => {
	const dispatch = useDispatch();
	return (
		<FollowerStyledWrap>
			<div className="seeall">
				<div className="title">
					<span className="followerstitle">Follow Requests</span>
				</div>
				<div>
					<Button
						variant="contained"
						endIcon={<CallMadeIcon fontSize="10px" color="action" />}
						color="inherit"
						style={{ borderRadius: "40px", fontSize: "10px" }}
						onClick={() => {
							dispatch(Openseeall(1));
						}}
						
					>
						See All
					</Button>
				</div>
			</div>
			<div className="followers">
				<FollowRequestsContainer />

				<div className="morefollowers">
					<Button
						variant="contained"
						startIcon={<ExpandMoreIcon color="action" />}
						color="inherit"
						style={{ borderRadius: "40px" }}
					>
						MORE
					</Button>
				</div>
			</div>
		</FollowerStyledWrap>
	);
};

export default FollowRequests;
