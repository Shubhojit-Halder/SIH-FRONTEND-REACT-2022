import React from "react";
import styled from "styled-components";
import Chatsection from "./Chatsection";
import Header from "./Header";
import Inputsection from "./Inputsection";
import { useSelector } from "react-redux";
import EmojiAdd from "./EmojiAdd";
import background from "./static/background.png";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import InactiveBackground from "./ChatSectionOrInactiveBackground/InactiveBackground";
import ChatSectionWrapper from "./ChatSectionOrInactiveBackground/ChatSectionWrapper";
import RightSectionCover from "./RightSectionCover";
const Rightsection = ({ state }) => {
	const Main = styled.div`
		width: 100%;
		height: 100%;
		background-color: ${(props) => props.color};
		position: relative;
		background-image: ${(props) => props.backgroundImage};
		.backgroundImage {
			bottom: 0;
			position: absolute;
			background-image: url(${(props) => props.imageLink});
			width: 100%;
			background-repeat: ${(props) => props.background_repeat};
			height: 100%;
			background-size: ${(props) => props.background_size};
			filter: opacity(${(props) => props.opacity});
		}
	`;
	// const { user_id } = useSelector((state) => state.chatopen);
	const user_id = true;
	const query = useQuery(
		["user_chat_bg_image", localStorage.getItem("user_id")],
		() => {
			return axios.get(
				"http://localhost:8080/fetch/chatbg?user=" +
					localStorage.getItem("user_id")
			);
		},
		{
			onError: (e) => {
				console.log(e);
			},
			staleTime: 60000,
		}
	);
	const propss = {
		imageLink: query.isSuccess && user_id ? query.data.data.url : background,
		opacity: query.isSuccess && user_id ? 1 : 0.1,
		backgroundImage:
			query.isSuccess && user_id
				? "white"
				: "linear-gradient(298deg, rgba(193,201,251,1) 0%, rgba(188,230,237,1) 100%)",
		background_repeat: query.isSuccess && user_id ? "no-repeat" : "repeat",
		background_size: query.isSuccess && user_id ? "cover" : "30%",
	};
	return (
		<>
			<RightSectionCover>
				<Header />
				{/* <Chatsection /> */}
				{/* <InactiveBackground /> */}
				<ChatSectionWrapper />
			</RightSectionCover>
		</>
	);
};

export default Rightsection;
