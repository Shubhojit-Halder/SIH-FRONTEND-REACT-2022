import React, { useEffect, useState } from "react";
import list from "../static/chats";
import styled from "styled-components";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Singlecontact from "./Singlecontact";
import { getContactList } from "./Queries/getContactList";
import { useContext } from "react";
import { SocketContext, WorkSocketContext } from "../../../../App";
import { useSelector } from "react-redux";
import axios from "axios";
const sortarr = (a, b) => {
	if (Date.parse(a.lastMsgTime) > Date.parse(b.lastMsgTime)) return -1;
	else if (Date.parse(a.lastMsgTime) < Date.parse(b.lastMsgTime)) return 1;
	else return 0;
};
const Chatlist = (props) => {
	const Main = styled.div`
		height: 100vh;
		width: 100%;
		overflow: scroll;
		padding-bottom: 150px;
		&::-webkit-scrollbar {
			width: 8px;
			background-color: white;
		}
		&::-webkit-scrollbar-thumb {
			background-color: rgb(189, 189, 249);
			border: 3px solid white;
		}
	`;
	const [contactList, setContactList] = useState([]);
	const socket = useContext(SocketContext);
	const workSocket = useContext(WorkSocketContext);
	const queryClient = useQueryClient();
	const query = useQuery(
		["Chat_List_Get", localStorage.getItem("user_id")],
		getContactList,
		{
			onSuccess: (e) => {
				// console.log("ChatList", e.data);
				setContactList(e.data.friends.sort(sortarr));
			},
		}
	);
	const gettingMessageHandler = async () => {
		console.log("Message from chatlist.jsx");
		queryClient.invalidateQueries(["single contact"]);
		queryClient.invalidateQueries(["profileImage-get"]);
		queryClient.invalidateQueries([
			"Chat_List_Get",
			localStorage.getItem("user_id"),
		]);
		// setContactList((prev) =>
		// 	query.isSuccess ? query.data.data.friends.sort(sortarr) : prev
		// );
		axios
			.get("http://localhost:8085/friends/fetch", {
				params: { user: localStorage.getItem("user_id") },
			})
			.then((a) => {
				setContactList(a.data.friends);
			});
	};
	const setTimeHandler = async (obj, socket) => {
		queryClient.invalidateQueries(["single contact"]);
		queryClient.invalidateQueries(["profileImage-get"]);
		socket.emit("setting-time", obj);
		queryClient.invalidateQueries([
			"Chat_List_Get",
			localStorage.getItem("user_id"),
		]);
		// setContactList((prev) =>
		// 	query.isSuccess ? query.data.data.friends.sort(sortarr) : prev
		// );
		axios
			.get("http://localhost:8085/friends/fetch", {
				params: { user: localStorage.getItem("user_id") },
			})
			.then((a) => {
				setContactList(a.data.friends);
			});
	};
	useEffect(() => {
		axios
			.get("http://localhost:8085/friends/fetch", {
				params: { user: localStorage.getItem("user_id") },
			})
			.then((a) => {
				setContactList(a.data.friends);
			});
		socket.on("getting-message", (message) => {
			gettingMessageHandler();
			axios
				.get("http://localhost:8085/friends/fetch", {
					params: { user: localStorage.getItem("user_id") },
				})
				.then((a) => {
					setContactList(a.data.friends);
				});
			// setContactList((prev) => prev.sort(sortarr));
		});
		socket.on("set-time", (obj) => {
			setTimeHandler(obj, socket);
			// setContactList((prev) => prev.sort(sortarr));
			axios
				.get("http://localhost:8085/friends/fetch", {
					params: { user: localStorage.getItem("user_id") },
				})
				.then((a) => {
					setContactList(a.data.friends);
				});
		});
	}, [socket]);
	const { change } = useSelector((state) => state.MessageSend);
	useEffect(() => {
		// console.log("Change");
	}, [change]);
	useEffect(() => {
		if (!workSocket.connected) {
			workSocket.connect();
			// console.log("Chat Page INPUT WorkSocket Connected Chatpage");
		} else {
			// console.log("WorkSocket INPUT Chat Page connected successfully");
		}
		workSocket.on("getting-message", (message) => {
			gettingMessageHandler();
			// setContactList((prev) => prev.sort(sortarr));
		});
		workSocket.on("set-time", (obj) => {
			setTimeHandler(obj, workSocket);
			axios
				.get("http://localhost:8085/friends/fetch", {
					params: { user: localStorage.getItem("user_id") },
				})
				.then((a) => {
					setContactList(a.data.friends);
				});
			// setContactList((prev) => prev.sort(sortarr));
		});
	}, [workSocket]);

	return (
		<>
			<Main>
				{contactList.map((value, index) => {
					return (
						<Singlecontact
							socket={props.socket}
							index={index}
							name={value.name}
							user_id={value._id}
							time={value.lastMsgTime}
						/>
					);
				})}
			</Main>
		</>
	);
};

export default Chatlist;
