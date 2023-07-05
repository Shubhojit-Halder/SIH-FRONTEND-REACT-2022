import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPendingRequests } from "../../Queries/getPendingRequests";
import SingleFollower from "./SingleFollower";
const FollowRequestContainer = (props) => {
	console.log(props.data);
	return (
		<>
			{props.data.map((value, index) => {
				return <SingleFollower user_id={value.req_user_id} key={index} />;
			})}
		</>
	);
};

export default FollowRequestContainer;
