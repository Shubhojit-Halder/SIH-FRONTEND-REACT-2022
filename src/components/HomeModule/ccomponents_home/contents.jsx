import React, { useEffect, useState } from "react";
import ProfilePicture from "./profilePicture";
import Menu from "./menu";
import { useSpeechSynthesis } from "react-speech-kit";
import ReactHtmlParser from "react-html-parser";
import { FcLike, FcComments, FcShare } from "react-icons/fc";
import { IconButton } from "@mui/material";
import Comments from "./comments";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ContentWrapper from "../home/styles/Contents.styled";
import MDEditor from "@uiw/react-md-editor";
import { useDispatch, useSelector } from "react-redux";
import { openShareEditor } from "../home/slices/postWriteSlice";
import { openLikerNames } from "../home/slices/LikerOpenSlice";
import { InfoOutlined, MicRounded } from "@mui/icons-material";
import { Writedetail } from "../home/static/js/Writedetail";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import PhotoInput from "./FileInputsForPost/PhotoInput";
import { setComment } from "../home/slices/CommentSlice";
import ImageInputatComment from "./FileInputsForPost/ImageInputatComment";
import {
	openSpeakMod,
	setMessagetoRead,
} from "../home/slices/SpeakModuleSlice";
import { OpenContent } from "../home/slices/ShowSingleContent";
import { useNavigate } from "react-router";

const Contents = () => {
	const [more, setMore] = React.useState(false);
	const [speak, setSpeak] = useState(false);
	const [isopen, setIsOpen] = React.useState(false);
	const [value, setValue] = React.useState("");
	const [OpenPhotoInput, setOpenPhotoInput] = React.useState(false);
	var s =
		"**Hellow** this is Hexa Overflow. \n Presenting **DakTicket** A new age social media platform.We propose to build a social media website fused with a robust in-built search engine that optimizes the searching paradigm and delivers hyperfast results to users. The social media encompasses modern chatting, posting and other ubiquitous features that allows users across the globe to interact and collaborate with each other.";
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(setComment(value));
	}, [value]);

	const onRightClick = (event) => {
		if (event.nativeEvent.which === 1) {
			console.log("Left click");
		} else if (event.nativeEvent.which === 3) {
			console.log("Right click");
			event.preventDefault();
			dispatch(openLikerNames(true));
		}
	};

	return (
		<ContentWrapper>
			<div className="uppergrid">
				<ProfilePicture />
				<div className="owner">
					<span className="name">Subhradeep Pal</span>
					<span className="time">Time : 2 days ago</span>
					<IconButton
						onClick={() => {
							dispatch(openSpeakMod(true));
							dispatch(setMessagetoRead(s));
						}}
					>
						<MicRounded />
					</IconButton>
				</div>
				<div></div>
				<div>
					<Menu />
				</div>
			</div>
			<div className="textContainer">
				<span
					className="textCN"
					onClick={() => {
						navigate("/name/post/1");
					}}
				>
					{!more ? (
						<MDEditor.Markdown
							source={s.slice(0, 50)}
							style={{
								whiteSpace: "pre-wrap",
								background: "#fff",
								color: "#000",
							}}
						/>
					) : (
						<MDEditor.Markdown
							source={s}
							style={{
								whiteSpace: "pre-wrap",
								background: "#fff",
								color: "#000",
							}}
						/>
					)}
				</span>
				<br />
				<span
					style={{ fontWeight: "700", cursor: "pointer", fontSize: "12px" }}
					onClick={() => {
						setMore((pre) => !pre);
					}}
				>
					{!more ? " Show More..." : " Show Less"}
				</span>
			</div>
			<div className="imageDiv">
				<img
					src="https://i.pinimg.com/550x/4a/6f/59/4a6f59296f90c11d77744720ca10d1af.jpg"
					width="100%"
					height="auto"
				/>
			</div>
			<div className="reactDiv">
				<div className="item">
					<IconButton size="large" onContextMenu={onRightClick}>
						<FcLike size={30} />
					</IconButton>
					<span>9</span>
				</div>

				<div className="item">
					<IconButton size="large">
						<FcComments size={30} />
					</IconButton>
					<span>8</span>
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
					<span>2</span>
				</div>
			</div>
			<div className="commentsection">
				<div className="commentgrid">
					<div className="commentgive">
						<ProfilePicture />
					</div>
					<div className="textarea">
						<textarea
							name=""
							id=""
							className="commentadd"
							cols="30"
							rows="10"
							value={value}
							onChange={(e) => {
								setValue(e.target.value);
							}}
						></textarea>
						<IconButton
							onClick={() => {
								setOpenPhotoInput(!OpenPhotoInput);
							}}
						>
							<AddPhotoAlternateOutlinedIcon />
						</IconButton>
						<IconButton
							onClick={() => {
								setIsOpen(!isopen);
							}}
						>
							<InfoOutlined />
						</IconButton>
					</div>
				</div>
				{OpenPhotoInput ? <ImageInputatComment /> : <></>}
				{isopen ? (
					<div
						style={{ background: "#fff", color: "#5858fc", padding: "10px" }}
					>
						{Writedetail.map((value, index) => {
							return (
								<>
									<span style={{ padding: "20px 0px" }} key={value.index}>
										{value.value}
										{value.detail}
									</span>
									<br />
								</>
							);
						})}
					</div>
				) : (
					<></>
				)}
				<div>
					<div className="showpreviouscomments">
						<span>
							Show Previous Comments
							<KeyboardArrowUpIcon fontSize="small" />
						</span>
					</div>
					<Comments />
					{/* <Comments />
					<Comments /> */}
				</div>
			</div>
		</ContentWrapper>
	);
};

export default Contents;
