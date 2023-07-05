import { Button } from "@mui/material";
import React from "react";
import { NavigateNext } from "@mui/icons-material";
import country_codes from "../static/Js/Contry_Codes";
import Contries from "../static/Js/Contries";
import isDateAfterToday from "../static/Js/IsAfterToday";
import { useMutation } from "@tanstack/react-query";
import { SetupAddress } from "../QueryHandlers/AuthQueries";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router";
const AddressAddBtn = (props) => {
	const navigate = useNavigate();
	const mutation = useMutation(SetupAddress, {
		onSuccess: (e) => {
			setTimeout(() => {
				navigate("/auth/otp_varification");
			}, 2000);
		},
		onError: (e) => {
			
		},
	});
	const { setError, setErrorMessage } = props.errorHandler;
	return (
		<>
			<LoadingButton
				loading={mutation.isLoading}
				type="submit"
				variant="contained"
				sx={{
					width: "80%",
					bgcolor: "rgb(88,88,252)",
					"&:hover": { bgcolor: "#3838b1" },
				}}
				endIcon={<NavigateNext />}
				className="loginBTN"
				onClick={(e) => {
					if (props.data) {
						console.log(props.data);
						console.log(country_codes[Contries.indexOf(props.data.country)]);
						if (isDateAfterToday(props.data.dob)) {
							setErrorMessage("Date Must Be Before Today");
							setError(true);
							return;
						} else {
							setErrorMessage("");
							setError(false);
							
						}
						mutation.mutate({
							user_id: localStorage.getItem("user_id"),
							dob: props.data.dob,
							country_code: country_codes[Contries.indexOf(props.data.country)],
							pin_code: props.data.pin_code,
						});
					}
				}}
			>
				Save and Next
			</LoadingButton>
		</>
	);
};

export default AddressAddBtn;
