import axios from "axios";

export const getAccess = (data) => {
	return axios.post("http://localhost:8000/getaccess/", data);
};
