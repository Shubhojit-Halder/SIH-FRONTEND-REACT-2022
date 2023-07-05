import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import image from "../../static/profile.png";
const HeaderImage = () => {
	const { user_id } = useSelector((state) => state.chatopen);
	const queryClient = useQueryClient();
	const getUserProfilePicture = () => {
		return axios.get("http://localhost:8080/fetch/dp?user=" + user_id);
	};
	const query = useQuery(["profileImage-get", user_id], getUserProfilePicture, {
		onError: (e) => {
			console.log(e);
		},
		staleTime: 60000,
	});
	useEffect(() => {
		queryClient.invalidateQueries(["profileImage-get", user_id]);
	}, [user_id]);

	return (
		<img
			src={query.isSuccess ? query.data.data.url : image}
			height="50px"
			width="50px"
			className="img"
		/>
	);
};

export default HeaderImage;
