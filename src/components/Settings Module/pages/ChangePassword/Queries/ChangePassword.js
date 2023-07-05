import axios from "axios";
export const changePassword = (data) => {
	return axios.post("http://localhost:8000/changepassword/", data);
};
