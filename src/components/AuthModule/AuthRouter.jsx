import React from "react";
import { Route, useParams } from "react-router";
import AddressAdd from "./AddressAdd";
import Login from "./Login";
import Otp from "./Otp";
import Signup from "./Signup.jsx";
const Auth = (props) => {
	const params = useParams();
	switch (params.loc) {
		case "login":
			return <Login socket={props.socket} />;
		case "signup":
			return <Signup />;
		case "addressadd":
			return <AddressAdd />;
		case "otp_varification":
			return <Otp />;
		default:
			return <h1>Not found</h1>;
			break;
	}
};

export default Auth;
