import { Grid } from "@mui/material";
import React, { createContext, useReducer } from "react";
import GroupSettingHeader from "./GroupSettingHeader";
import GroupsettingList from "./GroupsettingList";
import Groupsettinglower from "./Groupsettinglower";
import styled from "styled-components";
import Navbar from "../../nav_and_fc/navbar_component/Navbar";
import Helmet from 'react-helmet';
const Viewsettings = createContext();
const reducer = (state, action) => {
  return action.payload;
};
const GroupsettingsWrapper = () => {
  const [state, dispatch] = useReducer(reducer, "");

  return (
    <>
      <Helmet>
        <title>DaakTicket | Group Settings</title>
        <meta name="Landing" content="Landing page" />
      </Helmet>
      <Viewsettings.Provider value={{ state, dispatch }}>
        <Grid
          container
          spacing={0}
          sx={{
            height: "100vh",
            overflowY: "scroll",
            display: "flex",
            justifyContent: "center",
          }}
          className="baapGrid"
        >
          <Grid item xs={12} sm={12} md={12}>
            <Navbar />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            display="flex"
            justifyContent="center"
          >
            <GroupSettingHeader />
          </Grid>
          <Grid item xs={11} sm={11} md={7}>
            <GroupsettingList />
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Groupsettinglower />
          </Grid>
        </Grid>
      </Viewsettings.Provider>
    </>
  );
};
export { Viewsettings };
export default GroupsettingsWrapper;
