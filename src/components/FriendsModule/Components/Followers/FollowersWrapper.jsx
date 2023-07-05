import { Button, Paper } from "@mui/material";
import {
	ChasingDots,
	Circle,
	CubeGrid,
	DoubleBounce,
	FadingCircle,
	FoldingCube,
	Pulse,
	RotatingPlane,
	ThreeBounce,
	WanderingCubes,
	Wave,
} from "better-react-spinkit";
import React from "react";
import SingleFollower from "./SingleFollower";
// import Dp from ".../static/Dp.jpg";
const FollowersWrapper = (props) => {
	return (
		<Paper className="paperCompRd">
			{props.loadingcircle}
			{props.data.map((value, index) => {
				return <SingleFollower user_id={value.following_id} key={index} />;
			})}
		</Paper>
	);
};

export default FollowersWrapper;
