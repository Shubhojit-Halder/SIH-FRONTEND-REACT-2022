import { Grid, ListSubheader } from "@mui/material";
import React, { useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { Wrapper } from "./styles/Notifications.styled";
import { useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import SingleNotification from "./SingleNotification";
const Notifications = () => {
	const [socketUrl, setSocketUrl] = useState(
		"ws://localhost:8002/ws/all_notification/" +
			localStorage.getItem("user_id") +
			"/"
	);
	const [messageHistory, setMessageHistory] = useState([]);

	const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

	useEffect(() => {
		if (lastMessage !== null) {
			// setMessageHistory((prev) => prev.concat(JSON.parse(lastMessage.data)));
			let data = JSON.parse(lastMessage.data);
			console.log(data);

			if (data.notifs) {
				setMessageHistory((prev) => prev.concat(data.notifs));
			} else {
				// if (data.message) {
				console.log(data);
				setMessageHistory((prev) => prev.concat(data));
				// } else {
				// 	console.log("hiiiiiiiii");
				// 	// setMessageHistory((prev) => [...prev, data]);
				// }
			}
		}
	}, [lastMessage, setMessageHistory]);

	return (
		<Wrapper>
			<div className="allNotification">
				<List
					sx={{
						width: "98%",
						width: 350,
						bgcolor: "white",
						border: 1,
						borderColor: "grey",
						padding: 0,
						margin: 0,
					}}
				>
					<ListSubheader
						sx={{
							backgroundColor: "#f1f0f0",
							margin: 0,
							borderBottom: 1,
							width: "100%",
							boxSizing: "border-box",
						}}
					>
						<div className="subheader">Notifications</div>
					</ListSubheader>
					{messageHistory
						? messageHistory.map((value, index) => {
								if (value.message) {
									return (
										<SingleNotification
											message={value.message}
											key={index}
											id={value.id}
										/>
									);
								} else {
									return "";
								}
						  })
						: ""}
					<Divider variant="inset" component="li" />
				</List>
			</div>{" "}
		</Wrapper>
	);
};

export default Notifications;
