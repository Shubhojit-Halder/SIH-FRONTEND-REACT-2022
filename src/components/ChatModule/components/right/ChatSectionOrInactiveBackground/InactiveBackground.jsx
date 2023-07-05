import React from "react";
import styled from "styled-components";
import icon from "../static/icon.png";
import { motion } from "framer-motion";
const InactiveBackground = () => {
	const Main = styled.div`
		@import url(${(props) => props.font});
		height: 90%;
		width: 100%;
		z-index: 1000;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		div {
			font-size: 30px;
			font-weight: bold;
			text-align: center;
			font-family: "Pacifico", cursive;

			color: rgb(88, 88, 252);
		}
	`;
	// const { user_id } = useSelector((state) => state.chatopen);
	return (
		<Main
			font={
				"https://fonts.googleapis.com/css2?family=Pacifico&family=Rubik+Marker+Hatch&display=swap"
			}
		>
			<motion.img
				src={icon}
				alt=""
				height="60px"
				width="auto"
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1 }}
			/>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1 }}
			>
				Welcome to DaakTicket Messanger
			</motion.div>
		</Main>
	);
};

export default InactiveBackground;
