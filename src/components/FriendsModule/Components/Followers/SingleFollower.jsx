import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { DeleteFollower } from "../../Queries/DeleteFollowerQuery";
import { useQueryClient, useMutation } from "@tanstack/react-query";
const SingleFollower = (props) => {
	const queryClient = useQueryClient();
	console.log(props.user_id);
	const getUserProfilePicture = () => {
		return axios.get("http://localhost:8080/fetch/dp?user=" + props.user_id);
	};
	const query = useQuery(
		["profileImage-get", props.user_id],
		getUserProfilePicture,
		{
			staleTime: 60000,
		}
	);
	function getData() {
		return axios.get(
			"http://localhost:8000/getuserbyid/" + props.user_id + "/"
		);
	}
	const query2 = useQuery(["others_profile", props.user_id], getData, {
		staleTime: 60000,
	});
	const mutation = useMutation(DeleteFollower, {
		onSuccess: () => {
			queryClient.invalidateQueries([
				"getFollowers",
				localStorage.getItem("user_id"),
			]);
		},
	});

	return (
		<div className="rowRD">
			<div className="imgNamecompRd">
				<img
					src={
						query.isSuccess
							? query.data.data.url
							: "https://i.pinimg.com/originals/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
					}
					alt="Dp"
					className="imgRD"
				/>
				<span className="NameRD">
					{query2.isSuccess ? query2.data.data.full_name : "Loading..."}
				</span>
			</div>
			<div className="buttonsRD">
				<Button
					variant="contained"
					className="btnRD"
					onClick={() => {
						mutation.mutate({ user_id: props.user_id });
					}}
				>
					Remove
				</Button>
			</div>
		</div>
	);
};

export default SingleFollower;
