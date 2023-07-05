import axios from "axios";
export const getFollowSuggestion = () => {
	return axios.get(
		"http://localhost:8001/getsuggestions/" +
			localStorage.getItem("user_id") +
			"/"
	);
};
