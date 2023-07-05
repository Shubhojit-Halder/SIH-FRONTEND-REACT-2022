import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Menulist from "./menulist";
import Sidenavheader from "./Sidenavheader";
// import { style } from "@mui/system";
export default function NestedList() {
	const [open, setOpen] = React.useState(false);
	// const dispatch = useDispatch();

	return (
		<>
			<List
				sx={{
					height: "100vh",
					width: "280px",
					bgcolor: "background.paper",
				}}
				component="nav"
				aria-labelledby="nested-list-subheader"
				subheader={<Sidenavheader />}
			>
				<Divider />
				<Menulist subheader="none" />
			</List>
		</>
	);
}
