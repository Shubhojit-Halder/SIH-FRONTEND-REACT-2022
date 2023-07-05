import axios from "axios";
export const MakeFollow = (data) => {
	return axios.post("http://localhost:8001/makefollow/" + data.user_id + "/", {
		user_id: data.follow,
	});
};
