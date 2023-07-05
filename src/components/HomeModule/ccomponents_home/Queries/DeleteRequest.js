import axios from "axios";
export const DeleteRequest = (data) => {
	return axios.post(`http://localhost:8001/deleterequest/${data.user_id}/`, {
		user_id: data.req_user_id,
	});
};
