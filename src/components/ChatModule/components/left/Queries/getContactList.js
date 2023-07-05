import axios from "axios";
export const getContactList = () => {
	return axios.get("http://localhost:8085/friends/fetch", {
		params: { user: localStorage.getItem("user_id") },
	});
};
