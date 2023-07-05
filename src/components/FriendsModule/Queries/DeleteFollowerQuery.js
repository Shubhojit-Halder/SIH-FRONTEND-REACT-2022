import axios from "axios";
export const DeleteFollower = (data) => {
	return axios.post(
		"http://localhost:8001/deletefollower/" +
			localStorage.getItem("user_id") +
			"/",
		{ user_id: data.user_id }
	);
};
