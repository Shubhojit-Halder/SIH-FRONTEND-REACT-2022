import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ProfilePicture from "./profilePicture";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
const Followers = (props) => {
	const navigate = useNavigate();
	const Profile = styled.div`
		display: flex;
		position: relative;
		height: 40px;
		width: 40px;
		cursor: pointer;
	`;

	return (
		<List dense={true}>
			<ListItem
				secondaryAction={
					props.chat ? (
						<></>
					) : (
						<>
							<div style={{ zIndex: 100 }}>{props.loadingprogress}</div>
							{!props.firstbutton && (
								<Tooltip title={props.buttontooltip}>
									<IconButton
										edge="end"
										aria-label="delete"
										onClick={props.onClick}
									>
										{props.icon}
									</IconButton>
								</Tooltip>
							)}

							{props.secondbutton && (
								<Tooltip title={props.secondbuttontooltip}>
									<IconButton
										edge="end"
										aria-label="delete"
										onClick={props.onClickSecondButton}
									>
										{props.secondbutton}
									</IconButton>
								</Tooltip>
							)}
						</>
					)
				}
			>
				<Profile>
					<ProfilePicture link={props.profile_image_link} />
				</Profile>

				<ListItemText
					onClick={() => {
						if (props.user_id) {
							navigate("/profile/" + props.user_id);
						}
					}}
					primary={props.name ? props.name : "Unknown"}
					secondary={
						!props.hidesecondtext
							? !props.secondtext
								? "Secondajj\njjjjj\njjjjjjjjjjjjj".slice(0, 10) + "..."
								: props.secondtext
							: ""
					}
					style={{
						paddingLeft: "5px",
						cursor: "pointer",
						width: "60%",
						wordWrap: "break-word",
						whiteSpace: "pre-wrap",
						wordBreak: "break-word",
					}}
				/>
			</ListItem>
		</List>
		// </div>
	);
};

export default Followers;
