import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import background from "./static/background.png";
const RightSectionCover = (props) => {
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
	const { user_id, inactive } = useSelector((state) => state.chatopen);
	// const user_id = true;
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
			// staleTime: 60000,
		}
	);
	const propss = {
		imageLink:
			query.isSuccess && user_id && inactive ? query.data.data.url : background,
		opacity: query.isSuccess && user_id && inactive ? 1 : 0.1,
		backgroundImage:
			query.isSuccess && user_id && inactive
				? "white"
				: "linear-gradient(298deg, rgba(193,201,251,1) 0%, rgba(188,230,237,1) 100%)",
		background_repeat:
			query.isSuccess && user_id && inactive ? "no-repeat" : "repeat",
		background_size: query.isSuccess && user_id && inactive ? "cover" : "30%",
	};
	return (
		<>
			<Main {...propss}>
				<div className="backgroundImage"></div>
				{props.children}
			</Main>
		</>
	);
};

export default RightSectionCover;
