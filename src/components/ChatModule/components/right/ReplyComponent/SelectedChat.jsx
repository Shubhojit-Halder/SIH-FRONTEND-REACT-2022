import { Cancel } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setMessageID } from "../../../slices/ReplyMessage";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import axios from "axios";
const SelectedChat = () => {
	const Main = styled.div``;
	const Container = styled.div`
		width: 300px;
		height: 80px;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px;

		.chat-reply-container {
			width: 87%;
			height: 90%;
			background-color: #e1e0e0;
			position: absolute;
			right: 5px;
			bottom: 0;
			border-radius: 5px 10px 10px 0;
			padding: 5px;
			span {
				word-wrap: break-word;
				white-space: pre-wrap;
				word-break: break-word;
			}
		}
	`;
	const messageID = useSelector((state) => state.ChatReply);
	const dispatch = useDispatch();
	const query = useQuery(
		["ChatReply-Message", messageID.value],
		() => {
			return axios.get(
				"http://localhost:8085/message/only?m_id=" + messageID.value
			);
		},
		{
			onSuccess: (e) => {
				console.log(e.data);
			},
		}
	);
	return (
		<>
			{messageID.value && (
				<motion.div
					initial={{ x: 400 }}
					animate={{ x: 0 }}
					style={{
						position: "fixed",
						bottom: "80px",
						right: 0,
						zIndex: 1200,
						boxShadow: "-2px 2px 3px grey",
						borderRadius: "10px",
					}}
				>
					<Container>
						<IconButton
							style={{ position: "absolute", left: 0, top: 0 }}
							size="small"
							onClick={() => {
								dispatch(setMessageID(""));
							}}
						>
							<Cancel />
						</IconButton>
						<div className="chat-reply-container">
							<span>
								{query.isSuccess
									? query.data.data.message.message
									: "Loading..."}
							</span>
						</div>
					</Container>
				</motion.div>
			)}
		</>
	);
};

export default SelectedChat;
