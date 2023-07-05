import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Button from "@mui/material/Button";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import TagIcon from "@mui/icons-material/Tag";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import RecentPhotos from "./RecentPhotos";
import { useNavigate } from "react-router";
import LeftdivWrapper from "../styles/LeftDiv.styled";
const LeftDiv = () => {
	const navigate = useNavigate();
	return (
		<LeftdivWrapper>
			<div className="list">
				<ul>
					{/* <Link href={"./"}> */}
					<li
						onClick={() => {
							navigate("/chat");
						}}
					>
						<MailOutlineIcon />
						<span> Messages </span>
					</li>
					{/* </Link> */}
					{/* <Link href={"./"}> */}
					<li>
						<BookmarkBorderRoundedIcon />
						<span> Bookmarks </span>
					</li>
					{/* </Link>
          <Link href={"./"}> */}
					<li>
						<TagIcon />
						<span> Trending </span>
					</li>
					{/* </Link>
          <Link href={"./"}> */}
					<li
						onClick={() => {
							navigate("/followers");
						}}
					>
						<PeopleAltOutlinedIcon />
						<span>Followers</span>
					</li>
					{/* </Link> */}
					<li>
						<Button variant="outlined" className="shareBtn">
							Share
						</Button>
					</li>
				</ul>
				<RecentPhotos />
			</div>
		</LeftdivWrapper>
	);
};

export default LeftDiv;
