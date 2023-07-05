import {
	Delete,
	KeyboardArrowDownOutlined,
	More,
	MoreVertOutlined,
	Reply,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import LeftChatStyled from "./styles/LeftChatStyled";
import { setMessageID } from "../../../slices/ReplyMessage";
import { useDispatch } from "react-redux";

import SelectorRouter from "../ReplyComponent/SelectorRouter";
const getT = (t) => {
	const d = new Date(t);
	return d.getHours() + ":" + d.getMinutes();
};
const RightMessage = (props) => {
	const dispatch = useDispatch();
	const [actions, setActions] = useState(false);
	const [openoptions, setOpenoptions] = useState(false);
	return (
		<LeftChatStyled>
			<div className={"right-container"} id={props.messageID}>
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
						{/* <div> */}
						<span className="text">{props.message ? props.message : ""}</span>
						{/* </div> */}
						<div className="message-time">
							<span>{getT(props.time)}</span>
						</div>
					</div>
					<div className="reply-button">
						{actions && !openoptions ? (
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
										// dispatch(setMessageID(props.messageID));
										setOpenoptions(true);
									}}
								>
									<Reply fontSize="small" />
								</IconButton>
							</>
						) : (
							<></>
						)}
						<SelectorRouter
							openoptions={openoptions}
							setOpenoptions={setOpenoptions}
							messageID={props.messageID}
						/>
					</div>
				</div>
			</div>
		</LeftChatStyled>
		// <></>
	);
};

export default RightMessage;
