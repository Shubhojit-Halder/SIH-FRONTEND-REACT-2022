import React from "react";
import Contents from "../contents";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import ManyphotoContent from "../ManyphotoContent";
import SharedContent from "../SharedContent";
import InfiniteScroll from "react-infinite-scroller";
const ContentContainer = () => {
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
	return (
		<>
			{[1].map((value, index) => {
				return (
					<ContainerSectionWrapper key={index}>
						<Paper elevation={1} className="section2">
							<Contents />
						</Paper>
					</ContainerSectionWrapper>
				);
			})}

			{/* 			
			{[1].map((value, index) => {
				return (
					<ContainerSectionWrapper key={index}>
						<Paper elevation={1} className="section2">
							<SharedContent />
						</Paper>
					</ContainerSectionWrapper>
				);
			})} */}
			<ContainerSectionWrapper>
				<Paper elevation={1} className="section2">
					<ManyphotoContent />
				</Paper>
			</ContainerSectionWrapper>
		</>
	);
};

export default ContentContainer;
