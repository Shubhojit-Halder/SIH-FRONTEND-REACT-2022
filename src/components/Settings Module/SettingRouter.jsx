import React from "react";
import General from "./pages/General/General";
import Changepassword from "./pages/ChangePassword/Changepassword";
import { useSelector } from "react-redux";
const SettingRouter = (props) => {
	const page = useSelector((state) => state.settingrouting.value);

	switch (page) {
		case "general":
			return <General state2={props.state2} />;
			break;
		case "changepassword":
			return <Changepassword state2={props.state2} />;
		default:
			return <General state2={props.state2} />;
			break;
	}
};

export default SettingRouter;
