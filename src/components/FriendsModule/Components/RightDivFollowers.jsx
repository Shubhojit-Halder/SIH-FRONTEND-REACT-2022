import { React, useContext } from "react";
import Groups from "./Groups";
import FollowReq from "./FollowReq";
import MyFollowers from "./MyFollowers";
import Suggestions from "./Suggestions";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getPendingRequests } from "../Queries/getPendingRequests";
const RightDivFollowers = () => {
  const state = useSelector((state) => state.followerList.value);
  const query = useQuery(["GetPendingRequests"], getPendingRequests, {
    onSuccess: (e) => {
      console.log(e.data);
    },
  });
  return (
    <>
      {state === 1 ? <MyFollowers /> : <></>}
      {state === 2 ? (
        <FollowReq
          data={query.isSuccess ? query.data.data : []}
          loading={query.isLoading}
        />
      ) : (
        <></>
      )}
      {state === 3 ? <Suggestions /> : <></>}
      {state === 4 ? <Groups /> : <></>}
    </>
  );
};

export default RightDivFollowers;
