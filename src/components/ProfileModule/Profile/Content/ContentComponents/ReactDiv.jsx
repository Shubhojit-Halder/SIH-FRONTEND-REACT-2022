import { IconButton } from "@mui/material";
import React from "react";
import { FcComments, FcLike, FcShare } from "react-icons/fc";
import { openShareEditor } from "../../../../HomeModule/home/slices/postWriteSlice";
import { useDispatch } from "react-redux";
const ReactDiv = (props) => {
	const dispatch = useDispatch();
	return (
		<div className="reactDiv">
			<div className="item">
				<IconButton size="large">
					<FcLike size={30} />
				</IconButton>
				<span>{props.likes ? props.likes : 0}</span>
			</div>

			<div className="item">
				<IconButton size="large">
					<FcComments size={30} />
				</IconButton>
				<span>{props.comments ? props.comments : 0}</span>
			</div>
			<div className="item">
				<IconButton
					size="large"
					onClick={() => {
						dispatch(openShareEditor(true));
					}}
				>
					<FcShare size={30} />
				</IconButton>
				<span>{props.shares ? props.shares : 0}</span>
			</div>
		</div>
	);
};

export default ReactDiv;
