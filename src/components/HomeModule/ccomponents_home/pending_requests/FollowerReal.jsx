import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Followers from "../Followers";
import HandshakeIcon from "@mui/icons-material/Handshake";
import Cancel from "@mui/icons-material/Cancel";
import axios from "axios";
import { DeleteRequest } from "../Queries/DeleteRequest";
import { MakeFollow } from "../Queries/FollowQueries";
const FollowerReal = (props) => {
	const [data, setData] = useState({ full_name: "" });
	const getUser = () => {
		return axios.get(
			"http://localhost:8000/getuserbyid/" + props.user_id + "/"
		);
	};
	const query = useQuery(
		["Pending Requests", "User Fetching", props.user_id],
		getUser,
		{
			onSuccess: (e) => {
				setData(e.data);
			},
			staleTime: 60000,
		}
	);
	console.log(query.data);
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
		<Followers
			user_id={query.isSuccess ? query.data.data.user_id : ""}
			pendingreq={true}
			name={query.isSuccess ? query.data.data.full_name : "Loading..."}
			icon={<HandshakeIcon color="primary" />}
			buttontooltip={"Accept"}
			secondbutton={<Cancel />}
			secondbuttontooltip={"Delete"}
			onClickSecondButton={() => {
				mutation.mutate({
					user_id: localStorage.getItem("user_id"),
					req_user_id: query.data.data.user_id,
				});
			}}
			onClick={() => {
				mutation2.mutate({
					user_id: localStorage.getItem("user_id"),
					follow: query.data.data.user_id,
				});
			}}
			hidesecondtext={true}
		/>
	);
};

export default FollowerReal;
