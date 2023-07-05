import {
	Avatar,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import image from "./static/chat.svg";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const SingleNotification = (props) => {
	const [name, setName] = useState("Loading...");
	console.log(props.id);
	const query = useQuery(
		["user_details_notification", props.id],

		() => {
			return axios.get("http://localhost:8000/getuserbyid/" + props.id + "/");
		},
		{
			onSuccess: (e) => {
				setName(e.data.full_name);
				console.log("Getting user details........", e.data.full_name);
			},
		}
	);
	return (
		<ListItem alignItems="flex-start">
			<ListItemAvatar>
				<Avatar alt="Remy Sharp" src={image} />
			</ListItemAvatar>
			<ListItemText
				sx={{ color: "black" }}
				primary={name}
				secondary={
					<>
						<Typography
							sx={{ display: "inline" }}
							component="span"
							variant="body2"
							color="text.primary"
						>
							{props.message}
						</Typography>
					</>
				}
			/>
		</ListItem>
	);
};

export default SingleNotification;
