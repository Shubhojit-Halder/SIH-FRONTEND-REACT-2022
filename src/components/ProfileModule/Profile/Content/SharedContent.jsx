import React, { useEffect } from "react";
import ProfilePicture from "../../../HomeModule/ccomponents_home/profilePicture";
import Menu from "./menu";
import { FcLike, FcComments, FcShare } from "react-icons/fc";
import { IconButton } from "@mui/material";
import Comments from "./comments";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ReactHtmlParser from "react-html-parser";
import SharedContentWrapper from "../../../HomeModule/home/styles/SharedContents.styled";
import { Writedetail } from "../../../HomeModule/home/static/js/Writedetail";
import { InfoOutlined, MicRounded } from "@mui/icons-material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import ImageInputatComment from "../../../HomeModule/ccomponents_home/FileInputsForPost/ImageInputatComment";
import { useDispatch } from "react-redux";
import { setComment } from "../../../HomeModule/home/slices/CommentSlice";
const Contents = () => {
	const [more, setMore] = React.useState(false);
	const [more2, setMore2] = React.useState(false);
	const [isopen, setIsOpen] = React.useState(false);
	const [value, setValue] = React.useState("");
	const [OpenPhotoInput, setOpenPhotoInput] = React.useState(false);
	useEffect(() => {
		dispatch(setComment(value));
	}, [value]);
	const dispatch = useDispatch();
	var s =
		"<span>Project<span> Is Done by ,\nHexa Overflow\nHexa Overflow\nHexa Overflow\nHexa Overflow";
	return (
		<SharedContentWrapper>
			<div className="uppergrid">
				<ProfilePicture />
				<div className="owner">
					<span className="name">{`Subhradeep Pal Shared SeP's post`}</span>
					<span className="time">Time : 2 days ago</span>
				</div>
				<div className="owner"></div>
				<div>
					<Menu />
				</div>
			</div>
			<div className="textContainer">
				<span className="text">
					{!more ? ReactHtmlParser(s.slice(0, 50)) : ReactHtmlParser(s)}
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
			<div className="ownercontainer">
				<div className="uppergridd">
					<ProfilePicture />
					<div className="owner">
						<span className="name">Subhradeep Pal</span>
						<span className="time">Time : 2 days ago</span>
					</div>
					<div></div>
					<div></div>
				</div>
				<div className="textContainer">
					<span className="text">
						{!more2 ? ReactHtmlParser(s.slice(0, 50)) : ReactHtmlParser(s)}
					</span>
					<br />
					<span
						style={{ fontWeight: "700", cursor: "pointer", fontSize: "12px" }}
						onClick={() => {
							setMore2((pre) => !pre);
						}}
					>
						{!more2 ? " Show More..." : " Show Less"}
					</span>
				</div>
				<div className="imageDiv">
					<img
						src="https://i.pinimg.com/550x/4a/6f/59/4a6f59296f90c11d77744720ca10d1af.jpg"
						width="100%"
						height="auto"
						alt="Image"
					/>
				</div>
			</div>
			<div className="reactDiv">
				<div className="item">
					<IconButton size="large">
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
					<IconButton size="large">
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
				</div>
			</div>
		</SharedContentWrapper>
	);
};

export default Contents;
