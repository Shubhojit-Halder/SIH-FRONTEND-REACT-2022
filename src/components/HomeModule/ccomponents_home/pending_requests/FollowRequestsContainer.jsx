import React, { useEffect, useState } from "react";
import Followers from "../Followers";

import { useMutation, useQuery } from "@tanstack/react-query";
import { getPendingRequests } from "../Queries/getPendingRequests";
import FollowerReal from "./FollowerReal";
import { CradleLoader } from "react-loader-spinner";
import { CircularProgress } from "@mui/material";
const FollowRequestsContainer = () => {
	const [user_ids, setUser_ids] = useState([]);
	const query = useQuery(["GetPendingRequests"], getPendingRequests, {
		onSuccess: (e) => {},
	});
	console.log(query.data);

	return (
		<>
			{query.isSuccess ? (
				query.data.data.map((value, index) => {
					return <FollowerReal user_id={value.req_user_id} />;
				})
			) : (
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						padding: "5px",
					}}
				>
					<CircularProgress size={30} sx={{ color: "rgb(88,88,252)" }} />
				</div>
			)}
		</>
	);
};

export default FollowRequestsContainer;
