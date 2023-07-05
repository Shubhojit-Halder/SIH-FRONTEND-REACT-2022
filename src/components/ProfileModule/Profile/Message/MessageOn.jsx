import React, { useEffect, useState } from "react";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { CloseRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { openMsgReq } from "../../slices/MessageReqSlice";
import axios from "axios";
import { useContext } from "react";
import { SocketContext } from "../../../../App";
const MessageOn = (props) => {
	const socket = useContext(SocketContext);
	const user_id = props.user_id;
	console.log(user_id);
	useEffect(() => {
		if (!socket.connected) {
			socket.auth.id = localStorage.getItem("user_id");
			socket.connect();
			console.log("Connected ...");
		} else {
			console.log("connected from min chat");
			// socket.connect();
		}
		socket.on("getting-message", (message) => {
			// socket.emit("adding-friend", {
			// 	user: user_id,
			// 	friend_id: localStorage.getItem("user_id"),
			// 	friend_name: props.my_name,
			// });
			// socket.emit("adding-friend", {
			// 	friend_id: user_id,
			// 	user: localStorage.getItem("user_id"),
			// 	friend_name: props.user_name,
			// });
		});
		socket.on("set-time", (obj) => socket.emit("setting-time", obj));
		socket.on("new-you", (obj) => console.log("Latest", obj));
		return () => {
			console.log("Unmount...");
			socket.removeAllListeners();
			socket.disconnect();
		};
	}, [socket]);

	const [value, setValue] = useState("");
	const dispatch = useDispatch();
	return (
		<>
			<Grid
				container
				sx={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}
			>
				<Grid
					item
					xs={12}
					sm={12}
					md={12}
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						margin: "3px 0px",
					}}
				>
					<span
						style={{
							fontSize: "1.4rem",
							fontFamily: "El Messiri",
							color: "#5858fc",
						}}
					>
						{" "}
						Message{" "}
					</span>
					<IconButton
						onClick={() => {
							dispatch(openMsgReq(false));
							socket.removeAllListeners();
							socket.disconnect();
						}}
					>
						<CloseRounded />
					</IconButton>
				</Grid>
				<Grid item xs={12} sm={12} md={12} sx={{ margin: "3px 0px" }}>
					<TextField
						multiline
						label="Type here...."
						placeholder="Type here...."
						maxRows={4}
						sx={{ width: "300px" }}
						value={value}
						onChange={(event) => {
							setValue(event.target.value);
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} sx={{ margin: "3px 0px" }}>
					<Button
						onClick={() => {
							const message = {
								to: user_id,
								from: localStorage.getItem("user_id"),
								inGroup: false,
								message: value,
								isFile: false,
								hasParent: false,
								parent: "",
								file: null,
							};
							socket.emit("sending-message", message);
							socket.emit("adding-friend", {
								user: user_id,
								friend_id: localStorage.getItem("user_id"),
								friend_name: props.my_name,
							});
							socket.emit("adding-friend", {
								friend_id: user_id,
								user: localStorage.getItem("user_id"),
								friend_name: props.user_name,
							});
							axios.post("http://localhost:8002/sendnofication/", {
								to: user_id,
								messages: ["You Have Unseen Messages !!"],
								id: [localStorage.getItem("user_id")],
								type: ["chat"],
							});
						}}
						variant="contained"
						endIcon={<SendIcon />}
						sx={{
							width: "100%",
							bgcolor: "#5858fc",
							"&:hover": { bgcolor: "#3b3bb6" },
						}}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default MessageOn;
