import React, { useEffect, useState } from "react";
import Contents from "./contents";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import ManyphotoContent from "../../../HomeModule/ccomponents_home/ManyphotoContent";
import SharedContent from "./SharedContent";
import InfiniteScroll from "react-infinite-scroller";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import RouterContents from "../ContentVariants/RouterContents";
const ContentContainer = (props) => {
	const ContainerSectionWrapper = styled.div`
		display: flex;
		justify-content: center;
		margin-top: 10px;
		width: 100%;

		.section2 {
			min-height: 350px;
			width: 600px;
		}
		@media screen and (max-width: 600px) {
			.section2 {
				width: 400px;
			}
		}
		@media screen and (max-width: 400px) {
			.section2 {
				width: 350px;
			}
		}
	`;
	const queryClient = useQueryClient();
	const [posts, setPosts] = useState([]);
	const query = useQuery(
		["fetch-own-posts", props.user_id],
		() => {
			return axios.get("http://localhost:8082/get_doc?id=" + props.user_id);
		},
		{
			onSuccess: (e) => {
				console.log(e.data);
				setPosts(e.data.response);
			},
			staleTime: 30000,
		}
	);
	useEffect(() => {
		queryClient.invalidateQueries([
			"fetch-own-posts",
			localStorage.getItem("user_id"),
		]);
	}, []);

	return (
		<>
			{posts.map((value, index) => {
				return (
					<ContainerSectionWrapper key={index}>
						<Paper elevation={1} className="section2">
							<RouterContents
								value={value}
								// type={value._source.}
							/>
						</Paper>
					</ContainerSectionWrapper>
				);
			})}
		</>
	);
};

export default ContentContainer;
