import axios from "axios";

export const getUserData = () => {
	return axios.get(
		"http://localhost:8000/getuserbyid/" + localStorage.getItem("user_id") + "/"
	);
};
export const getUserProfilePicture = () => {
	return axios.get(
		"http://localhost:8080/fetch/dp?user=" + localStorage.getItem("user_id")
	);
};
