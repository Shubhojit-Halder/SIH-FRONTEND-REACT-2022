import axios from "axios";

export default async function getUser() {
	return await axios.get(
		`http://localhost:8000/getuserbyid/${localStorage.getItem("user_id")}/`
	);
}
