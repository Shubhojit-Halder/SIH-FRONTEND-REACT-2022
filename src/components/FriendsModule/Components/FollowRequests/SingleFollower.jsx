import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@mui/material";
import axios from "axios";
import { DeleteRequest } from "../../../HomeModule/ccomponents_home/Queries/DeleteRequest";
import { MakeFollow } from "../../../HomeModule/ccomponents_home/Queries/FollowQueries";
const SingleFollower = (props) => {
	const user_id = props.user_id;
	function getUser() {
		return axios.get(`http://localhost:8000/getuserbyid/${user_id}/`);
	}
	const query = useQuery(["user_details", user_id], getUser, {
		staleTime: 30000,
	});
	// Profile Picture Fetch...
	const getUserProfilePicture = () => {
		return axios.get("http://localhost:8080/fetch/dp?user=" + props.user_id);
	};
	const query2 = useQuery(
		["profileImage-get", props.user_id],
		getUserProfilePicture,
		{
			staleTime: 60000,
		}
	);
	// Actions...
	const mutation = useMutation(DeleteRequest, {
		onSuccess: (e) => {
			queryClient.invalidateQueries(["GetPendingRequests"]);
		},
		onError: (e) => {
			alert("An Error Occured");
		},
	});
	const mutation2 = useMutation(MakeFollow, {
		onSuccess: (e) => {
			queryClient.invalidateQueries(["GetPendingRequests"]);
		},
	});
	const queryClient = useQueryClient();
	return (
		<div className="rowRD">
			<div className="imgNamecompRd">
				<img
					src={
						query2.isSuccess
							? query2.data.data.url
							: "https://i.pinimg.com/originals/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
					}
					alt="Dp"
					className="imgRD"
				/>
				<span className="NameRD">
					{query.isSuccess ? query.data.data.full_name : "Loading..."}
				</span>
			</div>
			<div className="buttonsRD">
				<Button
					variant="contained"
					className="btnRDFR"
					onClick={() => {
						mutation2.mutate({
							user_id: localStorage.getItem("user_id"),
							follow: user_id,
						});
					}}
				>
					Accept
				</Button>
				<Button
					variant="contained"
					className="btnRDFR"
					onClick={() => {
						mutation.mutate({
							user_id: localStorage.getItem("user_id"),
							req_user_id: user_id,
						});
					}}
				>
					Decline
				</Button>
			</div>
		</div>
	);
};

export default SingleFollower;
