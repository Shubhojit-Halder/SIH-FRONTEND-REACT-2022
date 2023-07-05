import React, { useEffect, useState } from "react";
import Leftsection from "./left/Leftsection";
import styled from "styled-components";
import Rightsection from "./right/Rightsection";
import LeftWrapper from "./LeftWrapper";
import RightWrapper from "./RightWrapper";
import DropzoneWrapper from "../Dropzone/DropzoneWrapper";
import { io } from "socket.io-client";
import { useContext } from "react";
import { WorkSocketContext } from "../../../App";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setInActive, setUserId } from "../slices/ChatOpen";
import { setUserID } from "../slices/MessageSendSlice";
import SelectedChat from "./right/ReplyComponent/SelectedChat";
const Chatmain = (props) => {
	const Main = styled.div`
		padding-top: 80px;
		width: 100vw;

		height: 100vh;
		overflow: hidden;
		display: flex;
		.left-section {
			width: 35%;
			min-width: 350px;
			z-index: 100;
		}
		.right-section {
			z-index: 99;
			width: 100%;
		}
		@media screen and (max-width: 650px) {
			.left-section {
				width: 50%;
			}
			.right-section {
				width: 50%;
			}
		}
		@media screen and (max-width: 550px) {
			.left-section {
				width: 100%;
			}
			.right-section {
				width: 0;
			}
			.right-section-visible {
				width: 100%;
			}
		}
	`;
	const socket = props.socket;
	const dispatch = useDispatch();
	const workSocket = useContext(WorkSocketContext);
	useEffect(() => {
		if (!socket.connected) {
			socket.connect();
			console.log("Connected Chatpage");
		} else {
			console.log("connected successfully");
		}
		socket.on("users-online", (message) => {
			console.log("User List", message);
		});
		return () => {
			console.log("Unmount...");
			socket.removeAllListeners();
			socket.disconnect();
		};
	}, [socket]);
	useEffect(() => {
		if (!workSocket.connected) {
			workSocket.connect();
			console.log("WorkSocket Connected Chatpage");
		} else {
			console.log("WorkSocket connected successfully");
		}
		workSocket.on("users-online", (message) => {
			console.log("WorkSocket User List", message);
		});
	}, [workSocket]);
	useEffect(() => {
		dispatch(setInActive(""));
		return () => {
			console.log("Leaving Chat Page");
			workSocket.removeAllListeners();
			workSocket.disconnect();
		};
	}, [workSocket]);

	return (
		<>
			<div style={{ position: "absolute", zIndex: 1000000, width: "100%" }}>
				<DropzoneWrapper />
			</div>
			<Main>
				<LeftWrapper>
					<Leftsection socket={socket} />
				</LeftWrapper>
				<RightWrapper>
					<Rightsection />
				</RightWrapper>
			</Main>
			<SelectedChat />
		</>
	);
};

export default Chatmain;
