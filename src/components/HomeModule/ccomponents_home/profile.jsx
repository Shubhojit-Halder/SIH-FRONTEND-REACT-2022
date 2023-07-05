import React, { useEffect, useState } from "react";
import image from "../home/static/icon.png";
import axios from "axios";
import ProfileWrap from "../home/styles/Profile.styled";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import getUser from "../home/static/js/UserQuery";
import { useNavigate } from "react-router";
import { getUserProfilePicture } from "./Queries/getUser";
const Profile = () => {
	const [name, setName] = useState("Unknown");
	const [email, setEmail] = useState("Unknown");
	const navigate = useNavigate();
	const query = useQuery(
		["user_details"],
		() => {
			return getUser();
		},
		{
			onSuccess: (e) => {
				setName(e.data.full_name);
				setEmail(e.data.email);
			},
		}
	);
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
		<ProfileWrap>
			<div className="imageDiv"></div>
			<div className="profileImage">
				<img
					src={
						query2.isSuccess
							? query2.data.data.url
							: "https://i.pinimg.com/originals/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
					}
					height="100%"
					width="100%"
					className="image"
				/>
			</div>
			<div className="profileName">
				<div className="nameContainer">
					<div
						className="name"
						onClick={() => {
							navigate("/profile");
						}}
					>
						{query.isLoading ? `Loading...` : name}
						<br />
					</div>
					<div className="identity">
						{query.isLoading ? `Loading...` : email}
					</div>
				</div>
			</div>
		</ProfileWrap>
	);
};

export default Profile;
