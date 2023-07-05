import React from "react";
import Chatmain from "./Chatmain";
import Navbar from "../../nav_and_fc/navbar_component/Navbar";
import { useSelector } from "react-redux";
const Chat = (props) => {
	return (
		<>
			<Navbar />

			<Chatmain socket={props.socket} />
		</>
	);
};

export default Chat;
