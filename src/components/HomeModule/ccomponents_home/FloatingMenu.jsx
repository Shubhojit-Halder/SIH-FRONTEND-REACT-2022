import { Paper } from "@mui/material";
import React from "react";
import Menulist from "./menulist";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const FloatingMenu = () => {
	const state = useSelector((state) => state.home.value);
	const Wrap = styled.div`
		.section4 {
			margin-top: 10px;
			height: 250px;
			width: 100%;
			contain: content;
			overflow-y: scroll;
			border-radius: 5px;
		}
		.section4::-webkit-scrollbar {
			display: none;
		}
		@media screen and (max-width: 1200px) {
			.section4 {
				display: none;
			}
		}
	`;
	return (
		<>
			{state ? (
				<Wrap>
					<motion.div
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Paper
							elevation={1}
							id="section4"
							className="section4"
							style={{
								position: "fixed",
								top: "90px",
								width: "300px",
								height: "320px",
							}}
						>
							<Menulist></Menulist>
						</Paper>
					</motion.div>
				</Wrap>
			) : (
				<></>
			)}
		</>
	);
};

export default FloatingMenu;
