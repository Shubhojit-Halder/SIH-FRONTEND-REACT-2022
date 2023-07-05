import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TagIcon from "@mui/icons-material/Tag";
import LogoutIcon from "@mui/icons-material/Logout";
import { beforemore, aftermore } from "./menu_component/Menuicons";
import { Link } from "react-router-dom";
import Menuheader from "./menu_component/Menuheader";
import Menuicons from "./menu_component/Menuicons";
import { beforemoreLinks, aftermoreLinks } from "./menu_component/MenuLinks";
export default function Menulist({ subheader = "flex" }) {
	const [open, setOpen] = React.useState(false);
	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<List
			sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
			component="nav"
			aria-labelledby="nested-list-subheader"
			subheader={<Menuheader subheader={subheader} />}
		>
			{beforemore.map((value, index) => {
				return (
					<ListItemButton
						key={index}
						onClick={() => {
							console.log(beforemoreLinks[index]);
						}}
					>
						<ListItemIcon>{<Menuicons icon={value} />}</ListItemIcon>
						<ListItemText primary={value} />
					</ListItemButton>
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
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl: 4 }}>
								<ListItemIcon>{<Menuicons icon={value} />}</ListItemIcon>
								<ListItemText primary={value} />
							</ListItemButton>
						</List>
					);
				})}
			</Collapse>
			<ListItemButton
				onClick={() => {
					localStorage.clear();
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
