import React, { useEffect, useState } from "react";
import ProfilePicture from "../../../HomeModule/ccomponents_home/profilePicture";
import { IconButton } from "@mui/material";
import Comments from "./comments";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ContentWrapper from "../../../HomeModule/home/styles/Contents.styled";
import MDEditor from "@uiw/react-md-editor";
import { useDispatch, useSelector } from "react-redux";
import { openLikerNames } from "../../../HomeModule/home/slices/LikerOpenSlice";
import { InfoOutlined, MicRounded } from "@mui/icons-material";
import { Writedetail } from "../../../HomeModule/home/static/js/Writedetail";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { setComment } from "../../../HomeModule/home/slices/CommentSlice";
import ImageInputatComment from "../../../HomeModule/ccomponents_home/FileInputsForPost/ImageInputatComment";
import { useNavigate } from "react-router";
import Header from "./ContentComponents/Header";
import ReactDiv from "./ContentComponents/ReactDiv";
import PhotoMany from "../ContentVariants/PhotoMany";

const Contents = (props) => {
	const [more, setMore] = React.useState(false);
	const [speak, setSpeak] = useState(false);
	const [isopen, setIsOpen] = React.useState(false);
	const [value, setValue] = React.useState("");
	const [OpenPhotoInput, setOpenPhotoInput] = React.useState(false);
	var s =
		"**Hellow** this is Hexa Overflow. \n Presenting **DakTicket** Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum pariatur qui aspernatur eligendi numquam quaerat, labore, dolorum impedit corporis dolores libero, harum voluptatum laborum fugiat perspiciatis id veniam placeat doloribus!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas obcaecati autem molestias excepturi optio non soluta quae. Cupiditate fugiat incidunt explicabo qui eligendi tempora maxime optio, illum et voluptatibus quasi eos quibusdam expedita repellat ea blanditiis modi, excepturi consectetur odit! Obcaecati facere rem adipisci aspernatur quaerat, quia, soluta sed aut voluptatum animi natus ipsa ratione nostrum, excepturi deserunt labore ullam illo perferendis sequi quam distinctio nisi. Placeat ratione inventore consectetur explicabo aperiam praesentium laboriosam in, odit delectus modi deleniti omnis voluptatum ipsum error deserunt obcaecati! Nemo nihil incidunt blanditiis, quisquam hic accusantium iure facilis expedita repellendus molestias sint corrupti aut.";
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
			<Header user_id={props.user_id} time={props.time} />
			<div className="textContainer">
				<span
					className="textCN"
					onClick={() => {
						navigate("/name/post/1");
					}}
				>
					{!more ? (
						<MDEditor.Markdown
							source={props.desc.slice(0, 50)}
							style={{
								whiteSpace: "pre-wrap",
								background: "#fff",
								color: "#000",
							}}
						/>
					) : (
						<MDEditor.Markdown
							source={props.desc}
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
					{props.desc.length > 50
						? !more
							? " Show More..."
							: " Show Less"
						: ""}
				</span>
			</div>
			{props.content}
			<ReactDiv />
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
