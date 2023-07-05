import React, { useEffect, useState } from "react";
import MessageRouter from "./message_component/MessageRouter";
import { WorkSocketContext } from "../../../../App";
import { useContext } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { setMessageChange } from "../../slices/MessageSendSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const MessagesAll = (props) => {
	const workSocket = useContext(WorkSocketContext);
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const user_id = useSelector((state) => state.MessageSend.value);
	// const [messages, setMessages] = useState(props.messages);
	useEffect(() => {
		if (!workSocket.connected) {
			workSocket.connect();
			console.log("Chat Page INPUT WorkSocket Connected Chatpage");
		} else {
			console.log("WorkSocket INPUT Chat Page connected successfully");
		}
		workSocket.on("users-online", (message) => {
			console.log("WorkSocket User List", message);
		});
		workSocket.on("getting-message", (message) => {
			console.log("ASCHE", message);
			props.setMessages((prev) => {
				if (user_id == message.from || user_id == message.to) {
					return [...prev, message];
				} else {
					return [...prev];
				}
			});
		});
		workSocket.on("set-time", (obj) => {
			console.log("Setting Time....");
			workSocket.emit("setting-time", obj);
		});
		workSocket.on("new-you", (obj) => {
			console.log(obj);
		});
	}, [workSocket]);
	useEffect(() => {
		let div = document.getElementById("chat_scrollbar");
		div.scrollTop = div.scrollHeight;
	}, [props.messages]);

	return (
		<>
			{props.messages.map((value, index) => {
				return (
					<>
						<div>
							<MessageRouter message={value} />
						</div>
					</>
				);
			})}
		</>
	);
};

export default MessagesAll;
