import { React, useState } from "react";
import ProfilePicture from "./profilePicture";
import PhotoIcon from "@mui/icons-material/Photo";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PostWrapper from "../home/styles/Post.styled";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { openEditor } from "../home/slices/postWriteSlice";
import { useQuery } from "@tanstack/react-query";
import { getUserProfilePicture } from "./Queries/getUser";
const Post = () => {
	const dispatch = useDispatch();
	const query2 = useQuery(
		["profileImage-get", localStorage.getItem("user_id")],
		getUserProfilePicture,
		{
			onError: (e) => {
				console.log(e);
				localStorage.setItem("profileNotUploaded", "true");
			},
			onSuccess: (e) => {
				console.log(e.data);
			},
		}
	);
	return (
		<>
			<PostWrapper>
				<div className="uppergrid">
					<div className="profilePic">
						<ProfilePicture
							link={query2.isSuccess ? query2.data.data.url : ""}
						/>
					</div>

					<div
						className="postButtonContainer"
						onClick={() => {
							dispatch(openEditor(true));
						}}
					>
						<div className="postButton">
							<span>Share Your Things</span>
						</div>
					</div>
				</div>
				<div className="lowergrid">
					<div
						className="loweritem"
						onClick={() => {
							dispatch(openEditor(true));
						}}
					>
						<PhotoIcon fontSize="large" color="primary" />
						<span className="text"> &nbsp;&nbsp;Photo</span>
					</div>
					<div
						className="loweritem"
						onClick={() => {
							dispatch(openEditor(true));
						}}
					>
						<VideoCameraBackIcon fontSize="large" color="error" />
						<span className="text"> &nbsp;&nbsp;Video</span>
					</div>
					<div
						className="loweritem"
						onClick={() => {
							dispatch(openEditor(true));
						}}
					>
						<EmojiEventsIcon fontSize="large" style={{ color: "orange" }} />
						<span className="text"> &nbsp;&nbsp;Achievement</span>
					</div>
				</div>
			</PostWrapper>
		</>
	);
};

export default Post;
