import { GroupAdd, Logout, People, Settings, Tag } from "@mui/icons-material";
import Groups from "@mui/icons-material/Groups";
import React from "react";
import {
	FcAdvertising,
	FcBookmark,
	FcDocument,
	FcPuzzle,
	FcSms,
} from "react-icons/fc";
const beforemore = ["Groups", "Pages", "Bookmarks"];
const aftermore = [
	"Let's Talk",
	"People I Follow",
	"Followed",
	"Events",
	"Settings",
	"Games",
	"Followed HashTags",
];
const Menuicons = (props) => {
	switch (props.icon) {
		case "Groups":
			return <Groups color="primary" />;
		case "Pages":
			return <FcDocument size={25} />;
		case "Bookmarks":
			return <FcBookmark size={25} />;
		case "Let's Talk":
			return <FcSms size={25} />;
		case "People I Follow":
			return <People color="primary" />;
		case "Followed":
			return <GroupAdd color="secondary" />;
		case "Events":
			return <FcAdvertising size={25} />;
		case "Settings":
			return <Settings />;
		case "Games":
			return <FcPuzzle size={25} />;
		case "Followed HashTags":
			return <Tag />;
		default:
			break;
	}
};

export default Menuicons;
export { beforemore, aftermore };
