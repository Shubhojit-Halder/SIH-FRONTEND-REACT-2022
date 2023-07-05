import React from "react";
import ProfilePicture from "../../../../HomeModule/ccomponents_home/profilePicture";
import {
	openSpeakMod,
	setMessagetoRead,
} from "../../../../HomeModule/home/slices/SpeakModuleSlice";
import { useDispatch } from "react-redux/es/exports";
import { IconButton } from "@mui/material";
import { MicRounded } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import Menu from "../menu";
import { getUserProfilePicture } from "../../../Queries/GetUserData";
import axios from "axios";
export const getT = (t) => {
	const d = new Date(t);
	return d.toLocaleString();
};
const Header = (props) => {
	const dispatch = useDispatch();
	var s =
		"**Hellow** this is Hexa Overflow. \n Presenting **DakTicket** Lorem ipsum,";
	const getUserProfilePicture = () => {
		return axios.get("http://localhost:8080/fetch/dp?user=" + props.user_id);
	};
	const query = useQuery(
		["profileImage-get", props.user_id],
		getUserProfilePicture,
		{
			onError: (e) => {
				console.log(e);
			},
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
	return (
		<div className="uppergrid">
			<ProfilePicture link={query.isSuccess ? query.data.data.url : false} />
			<div className="owner">
				<span className="name">
					{query2.isSuccess ? query2.data.data.full_name : "Loading..."}
				</span>
				<span className="time">{getT(props.time)}</span>
				<IconButton
					onClick={() => {
						dispatch(openSpeakMod(true));
						dispatch(setMessagetoRead(s));
					}}
				>
					<MicRounded />
				</IconButton>
			</div>
			<div></div>
			<div>
				<Menu />
			</div>
		</div>
	);
};

export default Header;
