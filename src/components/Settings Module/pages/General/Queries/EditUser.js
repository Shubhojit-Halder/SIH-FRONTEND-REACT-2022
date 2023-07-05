import axios from "axios";
export const editName = (data) => {
	if (data.new_email) {
		return axios.post("http://localhost:8000/changeemail/", data);
	} else if (data.new_name)
		return axios.post("http://localhost:8000/changeusername/", data);
	else if (data.new_mobile)
		return axios.post("http://localhost:8000/changemobile/", data);
};
