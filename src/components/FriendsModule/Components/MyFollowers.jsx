import { Button, Paper } from "@mui/material";
import React from "react";
import { RightdivFrWrapper } from "../styles/RightdivFriends.styled";
import { useQuery } from "@tanstack/react-query";
import { getFollowers } from "../Queries/getFollowers";
import { Circle, FadingCircle } from "better-react-spinkit";
import FollowersWrapper from "./Followers/FollowersWrapper";
const MyFollowers = () => {
	const query = useQuery(
		["getFollowers", localStorage.getItem("user_id")],
		getFollowers,
		{
			staleTime: 30000,
		}
	);
	return (
		<RightdivFrWrapper>
			<FollowersWrapper
				data={query.isSuccess ? query.data.data : []}
				loadingcircle={
					query.isLoading ? (
						<div
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								padding: "15px",
							}}
						>
							<FadingCircle size={40} color="rgb(88,88,252)" />
						</div>
					) : (
						""
					)
				}
			/>
		</RightdivFrWrapper>
	);
};

export default MyFollowers;
