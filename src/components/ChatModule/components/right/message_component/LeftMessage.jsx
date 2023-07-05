import {
	Delete,
	KeyboardArrowDownOutlined,
	More,
	MoreVertOutlined,
	Reply,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setMessageID } from "../../../slices/ReplyMessage";
import LeftChatStyled from "./styles/LeftChatStyled";
const getT = (t) => {
	const d = new Date(t);
	return d.getHours() + ":" + d.getMinutes();
};
const LeftMessage = (props) => {
	const [actions, setActions] = useState(false);
	const dispatch = useDispatch();
	return (
		<LeftChatStyled>
			<div
				id={props.messageID}
				className="left-chat-message-main"
				onMouseEnter={(e) => {
					setActions(true);
				}}
				onMouseLeave={(e) => {
					setActions(false);
				}}
			>
				<div className="chat-message-parent">
					{/* <div> */}
					<span className="text">{props.message ? props.message : ""}</span>
					{/* </div> */}
					<div className="message-time">
						<span> {getT(props.time)}</span>
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
		</LeftChatStyled>
		// <></>
	);
};

export default LeftMessage;
