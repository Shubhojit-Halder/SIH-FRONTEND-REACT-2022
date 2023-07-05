import axios from "axios";
export const getFollowers = () => {
	return axios.get(
		"http://localhost:8001/getfollowers/" +
			localStorage.getItem("user_id") +
			"/"
	);
};
