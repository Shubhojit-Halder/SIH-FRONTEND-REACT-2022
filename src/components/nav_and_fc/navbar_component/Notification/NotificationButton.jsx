import NotificationsRounded from "@mui/icons-material/NotificationsRounded";
import { Badge, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { notification, people } from "../../slices/Sidebarslice";
import { useDispatch } from "react-redux";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const NotificationButton = (props) => {
	const dispatch = useDispatch();
	const [socketUrl, setSocketUrl] = useState(
		"ws://localhost:8002/ws/get_notification/" +
			localStorage.getItem("user_id") +
			"/"
	);
	const [notificationCount, setNotificationCount] = useState(0);
	const [messageHistory, setMessageHistory] = useState([]);
	const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
	useEffect(() => {
		console.log(readyState);
		if (lastMessage !== null) {
			console.log("Last Message: " + lastMessage.data);
			let data = JSON.parse(lastMessage.data);
			console.log(data);

			setNotificationCount(data ? data.unseen : 0);
		}
	}, [readyState, lastMessage]);
	const query = useQuery(
		["Get Notification", localStorage.getItem("user_id")],
		() => {
			return axios.get(
				"http://localhost:8089/get/unseen?user=" +
					localStorage.getItem("user_id")
			);
		},
		{
			onSuccess: (e) => {
				console.log(e.data);
				setNotificationCount(e.data.unseen);
			},
		}
	);
	return (
		<li className="notificationicon">
			<IconButton
				aria-label="show 17 new notifications"
				color="inherit"
				onClick={() => {
					if (props.followers) {
						dispatch(people(false));
					}
					dispatch(notification(!props.notify));
					axios.post("http://localhost:8002/deleteunseen/", {
						user_id: localStorage.getItem("user_id"),
					});
					setNotificationCount(0);
				}}
			>
				<Badge badgeContent={notificationCount} color="error">
					<NotificationsRounded
						sx={{ "&:hover": { color: "rgb(88,88,252)" } }}
					/>
				</Badge>
			</IconButton>
		</li>
	);
};

export default NotificationButton;
