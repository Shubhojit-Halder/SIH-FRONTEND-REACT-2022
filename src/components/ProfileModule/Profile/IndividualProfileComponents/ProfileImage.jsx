import { CameraAlt } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { openCropper } from "../../slices/dpSlice";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getUserProfilePicture } from "../../Queries/GetUserData";
const ProfileImage = () => {
	const dispatch = useDispatch();
	const query = useQuery(
		["profileImage-get", localStorage.getItem("user_id")],
		getUserProfilePicture,
		{
			onError: (e) => {
				console.log(e);
			},
			staleTime: 60000,
		}
	);
	return (
		<div className="profileImgDivIndpage">
			<img
				className="profileImageIndpage"
				src={
					query.isSuccess
						? query.data.data.url
						: "https://i.pinimg.com/originals/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
				}
				alt=""
			/>
			<IconButton
				size="small"
				sx={{
					position: "relative",
					left: "-30.5%",
					zIndex: "100",

					bottom: "-85px",
					marginTop: "-32px",

					color: "#000",
					bgcolor: "#fff",
					"&:hover": {
						bgcolor: "#fff",
					},
				}}
				onClick={() => {
					dispatch(openCropper(true));
				}}
			>
				<CameraAlt sx={{ fontSize: "1.2rem" }} />
			</IconButton>
		</div>
	);
};

export default ProfileImage;
