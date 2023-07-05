import { EditOutlined, PeopleAltOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const NameAndHeadline = (props) => {
	return (
		<div className="profileNameIndPage">
			<div className="nameContainerIndPage">
				<div className="nameIndPage">
					{props.name}
					<br />
				</div>
				<div className="identityIndPage">{props.headline}</div>
				<div className="editingButtonsIndPage">
					<Button className="editBtnIndPage" variant="contained">
						<EditOutlined />
						Edit Profile
					</Button>
					<Button className="followerBtnIndPage" variant="outlined">
						<PeopleAltOutlined /> Following
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NameAndHeadline;
