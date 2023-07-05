import { Button, Paper } from "@mui/material";
import React from "react";
import { RightdivFrWrapper } from "../styles/RightdivFriends.styled";
import Dp from "../static/Dp.jpg";
import FollowRequestContainer from "./FollowRequests/FollowRequestContainer";
const FollowReq = (props) => {
	return (
		<RightdivFrWrapper>
			<Paper className="paperCompRd">
				<FollowRequestContainer data={props.data}/>
			</Paper>
		</RightdivFrWrapper>
	);
};

export default FollowReq;
