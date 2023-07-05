import axios from "axios";
export const SendRequest = (data) => {
	return axios.post("http://localhost:8001/sendrequest/" + data.user_id + "/", {
		user_id: data.req_user_id,
	});
};
