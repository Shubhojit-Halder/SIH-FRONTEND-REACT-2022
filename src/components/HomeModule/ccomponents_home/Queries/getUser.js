import axios from "axios";

export const getUserProfilePicture = () => {
	return axios.get(
		"http://localhost:8080/fetch/dp?user=" + localStorage.getItem("user_id")
	);
};
