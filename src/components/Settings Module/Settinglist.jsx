import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { Drawer, IconButton, ListSubheader } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
// import style from "./styles/Settings.module.css";
import {
	FcAutomatic,
	FcKey,
	FcLock,
	FcCancel,
	FcPrivacy,
	FcShare,
	FcAnswers,
	FcDonate,
	FcLike,
	FcFullTrash,
} from "react-icons/fc";
import { Menu, Notifications } from "@mui/icons-material";
import { open } from "./slices/SettingListSlice";
import { useDispatch } from "react-redux";
import SettingWrapper from "./styles/Settings.styled";
import { goto } from "./slices/SettingRouting";
// import { Heart, Trash1 } from "react-swm-icon-pack";
// import { Val } from "../../../pages/_app";
export default function BasicList({ state2 }) {
	// const { statess, dispatch } = React.useContext(Val);
	const dispatch = useDispatch();
	// console.log(state);
	return (
		<Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
			<nav aria-label="main mailbox folders">
				<List
					subheader={
						<>
							<ListSubheader>
								<div
									style={{ display: "flex", justifyContent: "space-between" }}
								>
									<h1>Settings</h1>
									<div>
										{state2 ? (
											<IconButton
												onClick={() => {
													// dispatch({ type: "settingsmenu" });
													dispatch(open(false));
												}}
											>
												<Menu></Menu>
											</IconButton>
										) : (
											<></>
										)}
									</div>
								</div>
							</ListSubheader>
						</>
					}
				>
					<ListItem disablePadding>
						<ListItemButton
							onClick={() => {
								dispatch(goto("general"));
							}}
						>
							<ListItemIcon>
								<FcAutomatic size={25} />
							</ListItemIcon>
							<ListItemText primary="General" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton
							onClick={() => {
								dispatch(goto("changepassword"));
							}}
						>
							<ListItemIcon>
								<FcKey size={25} />
							</ListItemIcon>
							<ListItemText primary="Change Password" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<FcPrivacy size={25} />
							</ListItemIcon>
							<ListItemText primary="Privacy" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<FcLock size={25} />
							</ListItemIcon>
							<ListItemText primary="Security" />
						</ListItemButton>
					</ListItem>
					<Divider />
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Notifications color="primary" />
							</ListItemIcon>
							<ListItemText primary="Notifications" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<FcLike size={25} />
							</ListItemIcon>
							<ListItemText primary="Reaction Preferances" />
						</ListItemButton>
					</ListItem>

					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<FcFullTrash size={25} />
							</ListItemIcon>
							<ListItemText primary="Trash" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<FcCancel size={25} />
							</ListItemIcon>
							<ListItemText primary="Blocklist" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<FcShare size={25} />
							</ListItemIcon>
							<ListItemText primary="Sharing" />
						</ListItemButton>
					</ListItem>
					<Divider />
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<FcDonate size={25} />
							</ListItemIcon>
							<ListItemText primary="Donate" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<CodeIcon />
							</ListItemIcon>
							<ListItemText primary="Developer" />
						</ListItemButton>
					</ListItem>

					<Divider />
					<ListItem disablePadding>
						<ListItemButton component="a" href="#simple-list">
							<ListItemIcon>
								<FcAnswers size={25} />
							</ListItemIcon>
							<ListItemText primary="Spam" />
						</ListItemButton>
					</ListItem>
				</List>
			</nav>
		</Box>
	);
}
