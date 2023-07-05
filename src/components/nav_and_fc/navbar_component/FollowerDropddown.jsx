import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import img from "./static/icon.png";
import styled from "styled-components";
import { ListSubheader } from "@mui/material";
function generate(element) {
	return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) =>
		React.cloneElement(element, {
			key: value,
		})
	);
}
const FollowerDropddown = () => {
	const Wrapper = styled.div`
		.followDropdown {
			width: 350px;
			height: 80%;
			overflow-y: scroll;
			position: fixed;
			top: 80px;
			/* margin-left: 60%; */
			z-index: 100;
			padding: 0;
			background: #949494;
			color: #000000;
			border-bottom: 1px solid #949494;
			/* border-radius: 5px; */
		}
		.subheader {
			width: 100%;
			color: black;
			font-size: 15px;
			font-weight: 600;
		}
		.allNotification::-webkit-scrollbar,
		.followDropdown::-webkit-scrollbar {
			display: none;
		}
	`;
	return (
		<Wrapper>
			<div className="followDropdown">
				<List sx={{ padding: "0px" }}>
					<ListSubheader
						sx={{
							color: "white",
							backgroundColor: "#f1f0f0",
							border: 1,
							borderColor: "#949494",
							// borderRadius: "5px 5px 0 0",
						}}
					>
						<div className="subheader">
							<span>Pending Requests</span>
						</div>
					</ListSubheader>
					{generate(
						<ListItem
							sx={{
								border: 1,
								borderBottom: 0,
								backgroundColor: "white",
								borderColor: "#949494",
							}}
							secondaryAction={
								<Button
									variant="outlined"
									sx={{
										borderColor: "rgb(88,88,252)",
										color: "black",

										"&:hover": {
											backgroundColor: "rgb(88,88,252)",
											borderColor: "#ffffff",
											color: "white",
											boxShadow: "none",
										},
									}}
								>
									Accept
								</Button>
							}
						>
							<ListItemAvatar>
								<Avatar sx={{ outline: "2px solid white" }}>
									<img src={img} width="40" height="40" />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="Pubali Dey" />
						</ListItem>
					)}
					<ListSubheader
						sx={{
							color: "white",
							backgroundColor: "#f1f0f0",
							border: 1,
							borderColor: "#949494",
							// borderRadius: "5px 5px 0 0",
						}}
					>
						<div className="subheader">
							<span>Followers</span>
						</div>
					</ListSubheader>
					{generate(
						<ListItem
							sx={{
								border: 1,
								borderBottom: 0,
								backgroundColor: "white",
								borderColor: "#949494",
							}}
							secondaryAction={
								<Button
									variant="outlined"
									sx={{
										borderColor: "black",
										color: "black",
										borderColor: "rgb(88,88,252)",
										"&:hover": {
											backgroundColor: "rgb(88,88,252)",
											borderColor: "#ffffff",
											color: "white",
											boxShadow: "none",
										},
									}}
								>
									Follow
								</Button>
							}
						>
							<ListItemAvatar>
								<Avatar sx={{ outline: "2px solid white" }}>
									<img src={img} width="40" height="40" />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="Pubali Dey" />
						</ListItem>
					)}
				</List>
			</div>
		</Wrapper>
	);
};

export default FollowerDropddown;
