import { Delete, Reply } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setMessageID } from "../../../slices/ReplyMessage";
import LeftRepliedStyled from "./styles/LeftReplied.styled";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useDynamicRefs from "use-dynamic-refs";
const getT = (t) => {
	const d = new Date(t);
	return d.getHours() + ":" + d.getMinutes();
};
const RightRepliedMessage = (props) => {
	const [getRef, setRef] = useDynamicRefs();
	const [actions, setActions] = useState(false);
	const [name, setName] = useState("Loading...");
	const dispatch = useDispatch();
	const query = useQuery(
		["fetch-parent-message", props.parentID],
		() => {
			return axios.get(
				"http://localhost:8085/message/only?m_id=" + props.parentID
			);
		},
		{
			onSuccess: (e) => {
				console.log("Fetching parent message", e.data);
				axios
					.get("http://localhost:8000/getuserbyid/" + e.data.message.from + "/")
					.then((a) => {
						setName(a.data.full_name);
					});
			},
		}
	);
	return (
		<LeftRepliedStyled>
			<div className="right-container" id={props.messageID}>
				<div
					className="right-chat-message-main"
					onMouseEnter={(e) => {
						setActions(true);
					}}
					onMouseLeave={(e) => {
						setActions(false);
					}}
				>
					<div className="right-chat-message-parent">
						<div
							className="right-p-message"
							onClick={() => {
								var p = document.getElementById(props.parentID);
								var parent = document.getElementById("chat_scrollbar");

								console.log(parent.scrollTop, p.offsetTop);
								parent.scrollTop = p.offsetTop;
							}}
						>
							<span>
								<strong>{name}</strong>
							</span>
							<br />
							{query.isSuccess ? query.data.data.message.message : ""}
						</div>
						<span className="text">{props.message ? props.message : ""}</span>
						<div className="message-time">
							<span>{getT(props.time)}</span>
						</div>
					</div>
					<div className="reply-button">
						{actions ? (
							<>
								<IconButton
									size="small"
									sx={{
										bgcolor: "#ffffff73",
										marginRight: "5px",
										"&:hover": {
											bgcolor: "#ffffff73",
											color: "rgb(88,88,252)",
										},
									}}
									onClick={() => {
										dispatch(setMessageID(props.messageID));
									}}
								>
									<Reply fontSize="small" />
								</IconButton>
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</LeftRepliedStyled>
		// <></>
	);
};

export default RightRepliedMessage;
