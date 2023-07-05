import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ProfileImage = (props) => {
	const getUserProfilePicture = () => {
		return axios.get("http://localhost:8080/fetch/dp?user=" + props.user_id);
	};
	const query = useQuery(
		["profileImage-get", props.user_id],
		getUserProfilePicture,
		{
			onError: (e) => {
				console.log(e);
			},
			staleTime: 60000,
		}
	);
	return (
		<div className="profileImgDivOthpage">
			<img
				className="profileImageOthprof"
				src={
					query.isSuccess
						? query.data.data.url
						: "https://i.pinimg.com/originals/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
				}
				alt=""
			/>
		</div>
	);
};

export default ProfileImage;
