import axios from "axios";
export const getPendingRequests = () => {
	return axios.get(
		"http://localhost:8001/getpendingrequests/" +
			localStorage.getItem("user_id") +
			"/"
	);
};
