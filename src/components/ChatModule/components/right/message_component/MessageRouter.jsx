import React from "react";
import LeftMessage from "./LeftMessage";
import RightMessage from "./RightMessage";
import RightRepliedMessage from "./RightRepliedMessage";
import LeftRepliedMessage from "./LeftRepliedMessage";
const MessageRouter = (props) => {
	if (
		props.message.hasParent &&
		props.message.from === localStorage.getItem("user_id")
	) {
		return (
			<RightRepliedMessage
				parentID={props.message.parent}
				messageID={props.message._id}
				message={props.message.message}
				time={props.message.time}
			/>
		);
	} else if (
		props.message.hasParent &&
		props.message.to === localStorage.getItem("user_id")
	) {
		return (
			<LeftRepliedMessage
				parentID={props.message.parent}
				messageID={props.message._id}
				message={props.message.message}
				time={props.message.time}
			/>
		);
	} else if (props.message.from === localStorage.getItem("user_id"))
		return (
			<>
				<RightMessage
					message={props.message.message}
					messageID={props.message._id}
					time={props.message.time}
				/>
			</>
		);
	else if (props.message.to === localStorage.getItem("user_id"))
		return (
			<>
				<LeftMessage
					message={props.message.message}
					messageID={props.message._id}
					time={props.message.time}
				/>
			</>
		);
};

export default MessageRouter;
