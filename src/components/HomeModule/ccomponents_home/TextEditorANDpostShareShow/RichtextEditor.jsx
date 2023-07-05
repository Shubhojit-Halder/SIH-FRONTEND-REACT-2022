import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import styled from "styled-components";
import { Button, IconButton, Paper } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
	openEditor,
	openPhotoPost,
	setMediaType,
} from "../../home/slices/postWriteSlice";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Writedetail } from "../../home/static/js/Writedetail";
import MoodRoundedIcon from "@mui/icons-material/MoodRounded";
import EmojiMart from "./EmojiMart";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { myEmoji, Change } from "../../home/slices/EmojimartSlice";
import { WholeEditorWrapperRichText } from "../../home/styles/WholeEditorWrapperRichText.styled";
import { fadeIn } from "../../../../Variants/Variants";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PhotoInput from "../FileInputsForPost/PhotoInput";
import TextAreaRTE from "./TextArea";
import MediaInput from "../FileInputsForPost/MediaInput";
import PostButton from "./Post/PostButton";
const RichtextEditor = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.emojimartslice.value);
	const [cursorPos, setCursorPos] = useState({ start: 0, end: 0 });
	const chngState = useSelector((state) => state.emojimartslice.change);
	const addPhotos = useSelector((state) => state.postWrite.mediaPost);
	const [value, setValue] = React.useState("*Compose an epic*");
	const [isopen, setIsOpen] = React.useState(false);
	const [showEmoji, setshowEmoji] = React.useState(false);
	const [media, setMedia] = React.useState([]);
	const [MediaType, setMediatype] = useState([]);
	return (
		<>
			<WholeEditorWrapperRichText>
				<motion.div
					className="mainPaperRTE"
					variants={fadeIn}
					initial="initial"
					animate="animate"
				>
					<Paper className="subPaperRTE">
						<div className="topDivRTE">
							<div>
								<IconButton
									onClick={() => {
										setshowEmoji(!showEmoji);
									}}
								>
									<MoodRoundedIcon />
								</IconButton>
								<IconButton
									onClick={() => {
										dispatch(openPhotoPost(!addPhotos));
										dispatch(setMediaType(""));
									}}
								>
									<AttachFileIcon />
								</IconButton>
							</div>
							<h3>Create Post</h3>
							<div className="btnRTE">
								<IconButton
									onClick={() => {
										setIsOpen(!isopen);
									}}
								>
									<InfoOutlinedIcon />
								</IconButton>
								<IconButton
									onClick={() => {
										dispatch(openEditor(false));
										dispatch(openPhotoPost(false));
									}}
								>
									<CloseRoundedIcon />
								</IconButton>
							</div>
						</div>
						<hr />
						{showEmoji ? (
							<div style={{ position: "relative", zIndex: "1000" }}>
								<EmojiMart />
							</div>
						) : (
							<></>
						)}
						<div className="containerEditorRTE">
							{/* <MDEditor value={value} onChange={setValue} /> */}
							{isopen ? (
								<div className="openedRTE">
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
							<TextAreaRTE value={value} setValue={setValue} />
							{addPhotos ? (
								<MediaInput
									media={media}
									setMedia={setMedia}
									MediaType={MediaType}
									setMediatype={setMediatype}
								/>
							) : (
								<></>
							)}
							<PostButton text={value} media={media} MediaType={MediaType} />
						</div>
					</Paper>
				</motion.div>
			</WholeEditorWrapperRichText>
		</>
	);
};
export default RichtextEditor;
