import PersonAdd from "@mui/icons-material/PersonAdd";
import { Done } from "@mui/icons-material/";
import { CircularProgress } from "@mui/material";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import React from "react";
import Followers from "../Followers";
import { SendRequest } from "../Queries/SendRequest";
import { Circle } from "better-react-spinkit";

import axios from "axios";
import { useDispatch } from "react-redux";
import {
	SetSuccessAlert,
	SetSuccessAlertMsg,
} from "../../../AuthModule/slices/ErrorMessages";
const FollowSuggestions = (props) => {
	const dispatch = useDispatch();
	const queryClient = useQueryClient();
	const mutation2 = useMutation(SendRequest, {
		onSuccess: (e) => {
			dispatch(SetSuccessAlertMsg("Request Sent Successfully!!!"));
			dispatch(SetSuccessAlert(true));
			queryClient.invalidateQueries([
				"get-suggestion",
				localStorage.getItem("user_id"),
			]);
		},
	});
	console.log(props.value.user_id);
	const getUserProfilePicture = () => {
		return axios.get(
			"http://localhost:8080/fetch/dp?user=" + props.value.user_id
		);
	};
	const query = useQuery(
		["profileImage-get", props.value.user_id],
		getUserProfilePicture,
		{
			onError: (e) => {},
			staleTime: 60000,
		}
	);
	return (
		<Followers
			name={props.value.full_name}
			key={props.index}
			secondtext={props.value.email}
			user_id={props.value.user_id}
			profile_image_link={query.isSuccess ? query.data.data.url : false}
			icon={<PersonAdd />}
			loadingprogress={mutation2.isLoading ? <Circle /> : ""}
			buttontooltip={"Follow"}
			firstbutton={mutation2.isLoading}
			onClick={() => {
				mutation2.mutate({
					user_id: localStorage.getItem("user_id"),
					req_user_id: props.value.user_id,
				});
			}}
		/>
	);
};

export default FollowSuggestions;
