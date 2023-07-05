import React, { useEffect } from "react";
import styled from "styled-components";
import { setdata, open, change, setUserId } from "../../slices/ChatOpen";
import { openemoji } from "../../slices/EmojiSlice";
import { setUserID } from "../../slices/MessageSendSlice";
import { useDispatch } from "react-redux";
import Contact from "./styles/SingleContact";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import getUser from "../../../HomeModule/home/static/js/UserQuery";
import { getT } from "../right/message_component/LeftRepliedMessage";
const Singlecontact = (props) => {
	const dispatch = useDispatch();
	const queryClient = useQueryClient();
	const getLastMessage = () => {
		return axios.get("http://localhost:8085/message/last", {
			params: {
				user_pair: localStorage.getItem("user_id") + "_" + props.user_id,
			},
		});
	};
	const query = useQuery(
		["single contact", localStorage.getItem("user_id") + "_" + props.user_id],
		getLastMessage,
		{
			onSuccess: (e) => {
				console.log("Last Message:", e.data);
			},
			staleTime: 30000,
		}
	);

	const getUserProfilePicture = () => {
		return axios.get("http://localhost:8080/fetch/dp?user=" + props.user_id);
	};
	const query2 = useQuery(
		["profileImage-get", props.user_id],
		getUserProfilePicture,
		{
			onError: (e) => {
				console.log(e);
			},
			staleTime: 120000,
		}
	);
	function getData() {
		return axios.get(
			"http://localhost:8000/getuserbyid/" + props.user_id + "/"
		);
	}
	const userquery = useQuery(
		["others_profile", props.user_id, "user_chatlist"],
		getData,
		{
			staleTime: 60000,
		}
	);
	console.log(props.socket);
	const socket = props.socket;
	useEffect(() => {
		queryClient.invalidateQueries([
			"single contact",
			localStorage.getItem("user_id") + "_" + props.user_id,
		]);
		queryClient.invalidateQueries(["profileImage-get", props.user_id]);
		return () => {
			// dispatch(setUserID(""));
		};
	}, [socket]);

	return (
		<Contact>
			<div
				key={props.index}
				onClick={(e) => {
					dispatch(setdata(props.name));
					dispatch(openemoji(false));
					dispatch(change(false));
					dispatch(setUserId(props.user_id));
					dispatch(setUserID(props.user_id));
				}}
			>
				<div className="contact-list-item">
					<img
						src={
							query2.isSuccess
								? query2.data.data.url
								: "https://i.pinimg.com/originals/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
						}
						height="50px"
						width="50px"
						className="img"
					/>
					<div className="name-and-last-message">
						<span className="name">
							{userquery.isSuccess
								? userquery.data.data.full_name.length > 20
									? userquery.data.data.full_name.slice(0, 20) + `...`
									: userquery.data.data.full_name
								: ``}
						</span>
						<span className="last-message">
							{query.isSuccess && query.data.data.last_msg
								? query.data.data.last_msg.message.length > 40
									? query.data.data.last_msg.message.slice(0, 40) + `...`
									: query.data.data.last_msg.message
								: `Loading...`}
						</span>
					</div>
					<div className="timeoflastchat">
						<span>{getT(props.time)}</span>
						<div>
							<span className="count-unseen">{"23+"}</span>
						</div>
					</div>
				</div>
			</div>
		</Contact>
	);
};

export default Singlecontact;
