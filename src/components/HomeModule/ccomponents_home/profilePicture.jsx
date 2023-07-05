import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getUserProfilePicture } from "./Queries/getUser";

const profilePicture = (props) => {
	const ProfilePicWrapper = styled.div`
		.profileImage {
			height: 40px;
			width: 40px;
			background-color: black;
			position: relative;
			z-index: 10;
			top: 50%;
			left: 50%;
			border-radius: 50%;
			transform: translate(-50%, -50%);
			border: 2px solid white;
			outline: 2px solid black;
		}
		.image {
			border-radius: 50%;
		}
	`;

	return (
		<ProfilePicWrapper>
			<div className="profileImage">
				<img
					src={
						props.link
							? props.link
							: "https://i.pinimg.com/originals/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
					}
					height="100%"
					width="100%"
					className="image"
				/>
			</div>
		</ProfilePicWrapper>
	);
};

export default profilePicture;
