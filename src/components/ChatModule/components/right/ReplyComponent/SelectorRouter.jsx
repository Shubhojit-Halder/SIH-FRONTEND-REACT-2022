import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { IconButton } from "@mui/material";
import Cancel from "@mui/icons-material/Cancel";
import Reply from "@mui/icons-material/Reply";
import Delete from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux/es/exports";
import { setMessageID } from "../../../slices/ReplyMessage";
import { motion } from "framer-motion";
const SelectorRouter = (props) => {
	const messageID = useSelector((state) => state.ChatReply);
	const dispatch = useDispatch();
	const Main = styled.div`
		position: relative;
		right: 20px;
		top: 50%;
		z-index: 200000;
		/* height: 200px; */
		border-radius: 5px;
		width: 150px;
		background: white;
		transform: translate(0, -50%);
	`;
	// console.log("Open Options...", props.setOpenoptions);
	if (props.openoptions) {
		return (
			<>
				<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
					<Main>
						{" "}
						<Box
							sx={{
								width: "100%",
								maxWidth: 360,
								bgcolor: "background.paper",
								borderRadius: "5px",
							}}
						>
							<nav aria-label="main mailbox folders">
								<List
									subheader={
										<>
											<IconButton
												onClick={() => {
													props.setOpenoptions(false);
												}}
											>
												<Cancel />
											</IconButton>
										</>
									}
								>
									<ListItem disablePadding>
										<ListItemButton
											onClick={() => {
												dispatch(setMessageID(props.messageID));
												props.setOpenoptions(false);
											}}
										>
											<ListItemIcon>
												<Reply />
											</ListItemIcon>
											<ListItemText primary="Reply" />
										</ListItemButton>
									</ListItem>
									<ListItem disablePadding>
										<ListItemButton
											onClick={() => {
												props.setOpenoptions(false);
											}}
										>
											<ListItemIcon>
												<Delete />
											</ListItemIcon>
											<ListItemText primary="Delete" />
										</ListItemButton>
									</ListItem>
								</List>
							</nav>
						</Box>
					</Main>
				</motion.div>
			</>
		);
	}
	return <></>;
};

export default SelectorRouter;
