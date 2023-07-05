import { Delete, Reply } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import LeftChatStartStyled from "./styles/LeftChatStart.styled";

const LeftMessageStart = (props) => {
	const [actions, setActions] = useState(false);
	return (
		<LeftChatStartStyled>
			<div
				className="left-chat-message-main"
				onMouseEnter={(e) => {
					setActions(true);
				}}
				onMouseLeave={(e) => {
					setActions(false);
				}}
			>
				<div className="chat-message-parent">
					<span className="text">{props.message ? props.message : ""}</span>
					<div className="message-time">
						<span> 12:40 PM</span>
					</div>
				</div>
				<div className="reply-button">
					{actions ? (
						<>
							<IconButton
								size="small"
								sx={{
									bgcolor: "#ffffff73",
									marginLeft: "5px",
									"&:hover": { bgcolor: "#ffffff73", color: "rgb(88,88,252)" },
								}}
							>
								<Reply fontSize="small" />
							</IconButton>
							<IconButton
								size="small"
								sx={{
									bgcolor: "#ffffff73",
									marginLeft: "5px",
									"&:hover": { bgcolor: "#ffffff73", color: "rgb(88,88,252)" },
								}}
							>
								<Delete fontSize="small" />
							</IconButton>
						</>
					) : (
						<></>
					)}
				</div>
			</div>
		</LeftChatStartStyled>
		// <></>
	);
};

export default LeftMessageStart;
