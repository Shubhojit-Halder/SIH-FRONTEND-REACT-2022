import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import FollowersComponent from "./FollowersComponent";
import FollowRequests from "./FollowRequests";
import { Fab, Paper } from "@mui/material";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import { motion } from "framer-motion";
import Wrap from "../home/styles/Floating.style";
const FloatingDiv = () => {
	const div = useSelector((state) => state.home.value);

	return (
		<Wrap>
			{div ? (
				<>
					<div
						className="hold2"

						// style={{ width: "285px" }}
					>
						<Paper elevation={1} className="section5">
							<FollowRequests />
						</Paper>
					</div>
					<motion.div
						className="fab"
						id="fab"
						animate={{ scale: 1 }}
						initial={{ scale: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Fab
							color="primary"
							aria-label="add"
							onClick={() => {
								var div = document.getElementById("main");
								div.scrollTop = 0;
							}}
						>
							<ArrowUpward />
						</Fab>
					</motion.div>
				</>
			) : (
				<>
					<motion.div
						className="fab"
						id="fab"
						animate={{ scale: 0 }}
						initial={{ scale: 1 }}
						transition={{ duration: 0.5 }}
					>
						<Fab
							color="primary"
							aria-label="add"
							onClick={() => {
								var div = document.getElementById("main");
								div.scrollTop = 0;
							}}
						>
							<ArrowUpward />
						</Fab>
					</motion.div>
				</>
			)}
		</Wrap>
	);
};

export default FloatingDiv;
