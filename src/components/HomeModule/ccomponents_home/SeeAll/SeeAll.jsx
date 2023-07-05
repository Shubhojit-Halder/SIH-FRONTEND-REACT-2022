import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FollowReq from "../../../FriendsModule/Components/FollowReq";
import FollowReqSEEALL from "./FollowReqSEEALL";
import SuggestionsforSEEALL from "./SuggestionforSEEALL";

const SeeAll = () => {
  const SeeallWrapper = styled.section`
    .wholeSeeALLSL {
      width: 100%;
      position: fixed;
      z-index: 100000;
      background-color: #0000007a;
      height: 100vh;
      overflow-y: scroll;
    }
    .seeAlldivSL {
      /* width: 500px; */
      margin: 80px auto;
    }
    @media (max-width: 520px) {
    }
  `;
  const state = useSelector((state) => state.seeall.value);
  return (
    <>
      <SeeallWrapper>
        {state == 2 ? (
          <Grid container className="wholeSeeALLSL">
            <Grid item md={6} sm={7} xs={12} className="seeAlldivSL">
              <SuggestionsforSEEALL />
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
        {state == 1 ? (
          <Grid container className="wholeSeeALLSL">
            <Grid item md={6} sm={8} xs={12} className="seeAlldivSL">
              <FollowReqSEEALL />
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </SeeallWrapper>
    </>
  );
};

export default SeeAll;
