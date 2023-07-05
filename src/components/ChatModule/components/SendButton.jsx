import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Send from "@mui/icons-material/Send";
import { Fab } from "@mui/material";
import { WorkSocketContext } from "../../../App";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserId } from "../slices/ChatOpen";
import { setLocalUserID, setUserID } from "../slices/MessageSendSlice";
import axios from "axios";
const SendButton = (props) => {
	const user_id = useSelector((state) => state.MessageSend);
	const messageID = useSelector((state) => state.ChatReply);
	const workSocket = useContext(WorkSocketContext);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!workSocket.connected) {
			workSocket.auth.id = localStorage.getItem("user_id");
			workSocket.connect();
			console.log("Chat Page INPUT WorkSocket Connected Chatpage");
		} else {
			console.log("WorkSocket INPUT Chat Page connected successfully");
		}
		workSocket.on("users-online", (message) => {
			console.log("WorkSocket User List", message);
		});
	}, [workSocket]);
	useEffect(() => {
		console.log("SEND BUTTON", user_id.value);

		return () => {};
	}, [user_id.value]);
	return (
		<motion.div
			animate={{ scale: 1 }}
			initial={{ scale: 0 }}
			transition={{ duration: 0.6 }}
		>
			<Fab
				sx={{
					bgcolor: "rgb(88, 88, 252)",
					color: "white",
					"&:hover": { bgcolor: "#4242c3" },
				}}
				onClick={() => {
					console.log("User ID Chat Send button", user_id.localUserID);
					console.log(
						"User ID Chat Send button user_id",
						localStorage.getItem("user_id")
					);
					let messages = {
						message: props.data,
						to: user_id.value,
						isFile: false,
						file: null,
						from: localStorage.getItem("user_id"),
						parent: messageID.value ? messageID.value : "",
						hasParent: messageID.value ? true : false,
						inGroup: false,
					};
					console.log("jache....", user_id.value);
					workSocket.emit("sending-message", messages);
					props.setData("");
					axios.post("http://localhost:8002/sendnofication/", {
						to: user_id.value,
						messages: ["You Have Unseen Messages !!"],
						id: [localStorage.getItem("user_id")],
						type: ["chat"],
					});
				}}
			>
				<Send />
			</Fab>
		</motion.div>
	);
};

export default SendButton;

/*
		let messages = {
						message: props.data,
						to: user_id.value,
						isFile: false,
						file: null,
						from: localStorage.getItem("user_id"),
						// time: ,
						parent: "", ->message ID
						hasParent: false, ->true
						inGroup: false,
					};

*/
