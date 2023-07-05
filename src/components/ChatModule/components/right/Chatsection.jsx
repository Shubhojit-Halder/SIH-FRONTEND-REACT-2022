import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChatsectionWrapper from "../../styles/Chatsection.styled";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import LeftMessage from "./message_component/LeftMessage";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import RightMessage from "./message_component/RightMessage";
import MessageRouter from "./message_component/MessageRouter";
import MessagesAll from "./MessagesAll";
const Chatsection = () => {
	const [scroll, setScroll] = useState(false);
	const [messages, setMessages] = useState([]);
	const { user_id, inactive } = useSelector((state) => state.chatopen);

	const getMessages = async () => {
		return await axios.get(
			"http://localhost:8085/message/oneOone?user_pair=" +
				localStorage.getItem("user_id") +
				"_" +
				user_id
		);
	};
	const query = useQuery(
		["Getting Chats", localStorage.getItem("user_id"), user_id],
		getMessages,
		{
			onSuccess: (e) => {
				console.log("Chat Datas", e.data);
				setMessages(e.data.messages);
				let div = document.getElementById("chat_scrollbar");
				div.scrollTop = div.scrollHeight;
			},
			onError: (e) => {
				// console.log("Chat Datas error", e);
			},
			staleTime: 30000,
		}
	);
	const queryClient = useQueryClient();

	useEffect(() => {
		queryClient.invalidateQueries([
			"Getting Chats",
			localStorage.getItem("user_id"),
			user_id,
		]);
		setMessages(query.isSuccess ? query.data.data.messages : []);
	}, [user_id]);
	useEffect(() => {
		setTimeout(() => {
			let div = document.getElementById("chat_scrollbar");
			div.scrollTop = div.scrollHeight;
		}, 100);
	}, [inactive]);

	return (
		<>
			<ChatsectionWrapper
				onScroll={(e) => {
					setScroll(
						e.target.scrollTop <
							e.target.scrollHeight - e.target.clientHeight - 100
					);
				}}
				id="chat_scrollbar"
			>
				<MessagesAll messages={messages} setMessages={setMessages} />

				<div className="gap_creator"></div>
				{scroll ? (
					<motion.div
						className="fab_chatsection"
						animate={{ scale: 1 }}
						initial={{ scale: 0 }}
					>
						<Fab
							size="small"
							onClick={() => {
								let div = document.getElementById("chat_scrollbar");
								div.scrollTop = div.scrollHeight;
							}}
						>
							<KeyboardDoubleArrowDown />
						</Fab>
					</motion.div>
				) : (
					<></>
				)}
			</ChatsectionWrapper>{" "}
		</>
	);
};

export default Chatsection;
