import { Grid } from "@mui/material";
import { color } from "@mui/system";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Viewsettings } from "./GroupsettingsWrapper";
const GroupsettingList = () => {
    const [Button1, setButton1] = useState(true)
    const [Button2,setButton2] = useState(false);
    const {state,dispatch} = useContext(Viewsettings);
  const Wrapper = styled.section`
  .totalListGs{
    text-align: center;
    /* margin-top: 70px; */
  }
  .listHeadingGs{
    font-size: 1.6rem;
    font-weight: 600;
    padding: 10px 0px;
    border-bottom: 1px solid black;
  }
    .listItemsGs {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      font-size: 1.3rem;
      font-weight: 500;
      margin-top: 5px;
    }
    .listItemsGs p{
        width: 300px;
        border-radius: 30px;
        cursor: pointer;
        padding: 10px 5px;
        /* transition-property: width; */
        transition-duration: 1s;
    }
    .listItemsGs p:hover{
        width: 350px;

    }
    @media (max-width:600px) {
        .listItemsGs{
      font-size: 1.1rem;
        }
        .listHeadingGs{
    font-size: 1.4rem;

        }
    }
  `;
  return (
    <>
      <Wrapper>
        <Grid container spacing={2} marginTop="10px">
          <Grid item xs={12} sm={12} md={12}>
            <div className="totalListGs">
              <p className="listHeadingGs">Group Settings</p>
              <div className="listItemsGs">
                <p  onClick={()=>{
                setButton1(true);
                setButton2(false);
                dispatch({payload:"2"});
              }} style={{color:Button1?"White":"Black",backgroundColor:Button1?"#5858FC":"" }}>Group Admins</p>
                
                <p  onClick={()=>{
                setButton2(true);
                setButton1(false);
                dispatch({payload:"1"});

              }}style={{color:Button2?"White":"Black",backgroundColor:Button2?"#5858FC":"" }}>Pending Requests</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

export default GroupsettingList;
