import axios from "axios";

export default function getUser() {
	return axios.get(
		`http://localhost:8000/getuserbyid/${localStorage.getItem("user_id")}/`
	);
}
