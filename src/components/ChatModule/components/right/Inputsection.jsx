import { EmojiEmotions } from "@mui/icons-material";
import AttachFile from "@mui/icons-material/AttachFile";
import * as Icons from "@mui/icons-material";
import { Fab, IconButton, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { openemoji } from "../../slices/EmojiSlice";
import EmojiOpener from "./EmojiOpener";
import Textareasectin from "./Textareasectin";
const Inputsection = () => {
	const Mainn = styled.div`
		position: absolute;

		height: 70px;
		width: 100%;
		padding: 5px 10px;
		z-index: 100;
		bottom: 0px;
		contain: content;
		display: flex;
		align-items: center;
		background-color: #eceaea;
		.textfield {
			background-color: white;
			width: 100%;
			padding: 10px 20px;
			position: relative;
			margin: 10px;
			border-radius: 10px;
			align-items: center;
			display: flex;
			textarea {
				outline: none;
				border: none;
				height: 30px;
				resize: none;
				width: 100%;
				/* height: 100%; */
				font-size: 15px;
			}
			textarea::-webkit-scrollbar {
				width: 8px;
			}
			textarea::-webkit-scrollbar-thumb {
				background-color: rgb(88, 88, 252);
				border-radius: 5px;
			}
		}
	`;

	return (
		<Mainn>
			<motion.div
				animate={{ scale: 1 }}
				initial={{ scale: 0 }}
				transition={{ duration: 0.4 }}
			>
				<EmojiOpener />
			</motion.div>
			<motion.div
				animate={{ scale: 1 }}
				initial={{ scale: 0 }}
				transition={{ duration: 0.4 }}
			>
				<IconButton>
					<AttachFile />
				</IconButton>
			</motion.div>

			<Textareasectin />
		</Mainn>
	);
};

export default Inputsection;
