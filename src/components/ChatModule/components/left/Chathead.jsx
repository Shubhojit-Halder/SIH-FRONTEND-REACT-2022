import { KeyboardArrowLeft, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MainHead } from "./styles/Chathead.styled";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "./Queries/getUser";
import image from "../static/profile.png";
const Chathead = () => {
	const [header, setHeader] = useState(false);
	const query = useQuery(
		["profileImage-get", localStorage.getItem("user_id")],
		getUser,
		{
			onError: (e) => {
				console.log(e);
				localStorage.setItem("profileNotUploaded", "true");
			},
			onSuccess: (e) => {
				console.log(e.data);
			},
		}
	);
	return (
		<MainHead>
			{header ? (
				<>
					<motion.div
						animate={{ rotate: 720 }}
						initial={{ rotate: 0 }}
						transition={{ duration: 0.5 }}
					>
						<IconButton
							sx={{ color: "rgb(88, 88, 252)" }}
							onClick={() => {
								setHeader(false);
							}}
						>
							<KeyboardArrowLeft />
						</IconButton>
					</motion.div>
					<motion.div
						className="inputfieldandbutton"
						animate={{ scale: 1 }}
						initial={{ scale: 0 }}
						transition={{ duration: 0.4 }}
					>
						<input
							type="text"
							placeholder="Search Contact..."
							onChange={(e) => {}}
						/>
						<motion.div
							animate={{ rotate: 360 }}
							initial={{ rotate: -360 }}
							transition={{ duration: 0.7 }}
						>
							<IconButton size="small" sx={{ color: "rgb(88, 88, 252)" }}>
								<Search size="small" />
							</IconButton>
						</motion.div>
					</motion.div>
				</>
			) : (
				<>
					<img
						src={query.isSuccess ? query.data.data.url : image}
						height="40px"
						width="40px"
						className="img"
					/>
					<motion.div
						className="name"
						animate={{ scale: 1 }}
						initial={{ scale: 0 }}
					>
						<span>{`Messages`}</span>
					</motion.div>
					<motion.div>
						<IconButton
							size="small"
							onClick={() => {
								setHeader(true);
							}}
							sx={{ color: "rgb(88, 88, 252)" }}
						>
							<Search />
						</IconButton>
					</motion.div>
				</>
			)}
		</MainHead>
	);
};

export default Chathead;
