import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { getUserData } from "../../Queries/GetUserData";
import MessageOn from "./MessageOn";

const MessageOnWrapper = (props) => {
	console.log(props.user_id);
	const query = useQuery(["profile_page", "get_user"], getUserData, {
		staleTime: 30000,
	});
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#00000046",
				height: "105vh",
			}}
		>
			<div style={{ width: "340px" }}>
				<MessageOn
					socket={props.socket}
					user_id={props.user_id}
					user_name={props.user_name}
					my_name={query.isSuccess ? query.data.data.full_name : ""}
				/>
			</div>
		</div>
	);
};

export default MessageOnWrapper;
