import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LogoutIcon from "@mui/icons-material/Logout";
import { beforemore, aftermore } from "./menu_component/Menuicons";
import { Link } from "react-router-dom";
import Menuheader from "./menu_component/Menuheader";
import Menuicons from "./menu_component/Menuicons";
import { beforemoreLinks, aftermoreLinks } from "./menu_component/MenuLinks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { open as Open } from "../../slices/Sidebarslice";
import { useContext } from "react";
import { SocketContext, WorkSocketContext } from "../../../../App";
import { setUserID } from "../../../ChatModule/slices/MessageSendSlice";
import { setUserId } from "../../../ChatModule/slices/ChatOpen";
export default function Menulist({ subheader = "flex" }) {
	const socket = useContext(SocketContext);
	const workSocket = useContext(WorkSocketContext);
	const navigate = useNavigate();
	const [open, setOpen] = React.useState(false);
	const handleClick = () => {
		setOpen(!open);
	};
	const dispatch = useDispatch();
	console.log(socket);
	return (
		<List
			sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
			component="nav"
			aria-labelledby="nested-list-subheader"
			subheader={<Menuheader subheader={subheader} />}
		>
			{beforemore.map((value, index) => {
				return (
					<Link
						to={beforemoreLinks[index]}
						style={{ textDecoration: "none", color: "black" }}
					>
						<ListItemButton key={index}>
							<ListItemIcon>{<Menuicons icon={value} />}</ListItemIcon>
							<ListItemText primary={value} />
						</ListItemButton>
					</Link>
				);
			})}
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<MoreHorizIcon color="primary" />
				</ListItemIcon>
				<ListItemText primary="More" />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				{aftermore.map((value, index) => {
					return (
						<Link
							to={aftermoreLinks[index]}
							style={{ textDecoration: "none", color: "black" }}
						>
							<List component="div" disablePadding>
								<ListItemButton
									sx={{ pl: 4 }}
									onClick={() => {
										dispatch(Open(false));
									}}
								>
									<ListItemIcon>{<Menuicons icon={value} />}</ListItemIcon>
									<ListItemText primary={value} />
								</ListItemButton>
							</List>
						</Link>
					);
				})}
			</Collapse>
			<ListItemButton
				onClick={() => {
					localStorage.clear();
					dispatch(Open(false));
					navigate("/auth/login");
					socket.removeAllListeners();
					socket.disconnect();
					workSocket.removeAllListeners();
					workSocket.disconnect();
					dispatch(setUserID(""));
					dispatch(setUserId(""));
					// window.location.reload();
				}}
			>
				<ListItemIcon>
					<LogoutIcon color="error" />
				</ListItemIcon>
				<ListItemText primary="Log Out" />
			</ListItemButton>
		</List>
	);
}
