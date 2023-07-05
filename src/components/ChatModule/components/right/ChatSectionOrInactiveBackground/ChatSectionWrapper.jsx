import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Chatsection from "../Chatsection";
import Inputsection from "../Inputsection";
import InactiveBackground from "./InactiveBackground";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
const ChatSectionWrapper = () => {
	const { inactive, user_id } = useSelector((state) => state.chatopen);

	return (
		<>
			{inactive ? (
				<>
					<Chatsection />
					<Inputsection />
				</>
			) : (
				<InactiveBackground />
			)}
		</>
	);
};

export default ChatSectionWrapper;
