import { AppRegistration, Cancel } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import UserRegistration from "../QueryHandlers/AuthQueries";
import { useMutation } from "@tanstack/react-query";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import check from "../static/Js/Checkpassword";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { SetAlert, SetAlertMsg, SetErrorAlert, SetErrorAlertMsg, SetSuccessAlert, SetSuccessAlertMsg } from "../slices/ErrorMessages";
const RegisterBtn = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mutation = useMutation(UserRegistration, {
    onError: (error) => {
      if (error.response.status == 406) {
        // alert("User With This Email Already Registered");
        dispatch(SetErrorAlertMsg("User With This Email Already Registered"));
        dispatch(SetErrorAlert(true));
      }
    },
    onSuccess: (data) => {
      localStorage.setItem("user_id", data.data.user_id);
	  dispatch(SetSuccessAlertMsg("You are Successfully Registered!!!"));
	  dispatch(SetSuccessAlert(true));
      setTimeout(() => {
        navigate("/auth/addressadd");
      }, 2000);
    },
  });

  return (
    <>
      <LoadingButton
        onClick={() => {
          if (
            props.data.full_name &&
            props.data.email &&
            props.data.password &&
            props.data.gender &&
            props.data.mobile
          ) {
            if (check(props.data.password, props.data.confirm_password)) {
              mutation.mutate({
                full_name: props.data.full_name,
                email: props.data.email,
                password: props.data.password,
                gender: props.data.gender,
                mobile: props.data.mobile,
              });
            } else {
              dispatch(SetErrorAlertMsg("Both Password Fields Didn't Match."));
              dispatch(SetErrorAlert(true));
            }
          }
        }}
        loading={mutation.isLoading}
        type="submit"
        variant="contained"
        sx={{
          width: "80%",
          bgcolor: "rgb(88,88,252)",
          "&:hover": { bgcolor: "#3838b1" },
          borderRadius: "20px",
        }}
        endIcon={mutation.isSuccess ? <DoneOutlineIcon /> : <AppRegistration />}
      >
        {/* {mutation.isLoading ? `Registerd` : "Register"} */}
        {mutation.isError
          ? "Register"
          : mutation.isSuccess
          ? "Registered"
          : "Register"}
      </LoadingButton>
    </>
  );
};

export default RegisterBtn;
