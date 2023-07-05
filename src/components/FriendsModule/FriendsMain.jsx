import { Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../nav_and_fc/navbar_component/Navbar";
import FriendNavDiv from "./Components/FriendNavDiv";
import RightDivFollowers from "./Components/RightDivFollowers";
import { TotalFriends } from "./styles/Total.styled";

const FriendsMain = () => {
  return (
    <>
      <TotalFriends>
        <Grid container spacing={2} sx={{height:"100vh",overflowY:"scroll"}} className="FullGridFM">
          <Grid item xs={12} sm={12} md={12}>
            <Navbar />
          </Grid>
          <Grid item xs={12} sm={3.7} md={3} className="FMGrid">
            <FriendNavDiv />
          </Grid>
          <Grid item xs={12} sm={8.3} md={9} className="FMGridRight">
            <RightDivFollowers />
          </Grid>
        </Grid>
      </TotalFriends>
    </>
  );
};
export default FriendsMain;
