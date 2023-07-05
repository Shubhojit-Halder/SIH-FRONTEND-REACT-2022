import axios from "axios";
export default function UserRegistration(data) {
	return axios.post("http://localhost:8000/register/", data);
	// {
	//     "full_name":"Aryadeep Chakraborty",
	//     "email":"nodeneel@outlook.com",
	//     "password":"ilovepython",
	//     "gender":"Male",
	//     "mobile":"9830368416"
	// }
}
export const SetupAddress = (data) => {
	return axios.post("http://localhost:8000/addressgenerate/", data);
};
export const SendOTP = (data) => {
	return axios.post("http://localhost:8000/sendotp/", data);
};
export const VerifyOTP = (data) => {
	return axios.post("http://localhost:8000/verifyotp/", data);
};
export const Login = (data) => {
	return axios.post("http://localhost:8000/login/", data);
};
