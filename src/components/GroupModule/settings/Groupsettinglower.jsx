import { Grid } from "@mui/material";
import React, { useContext,useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { Viewsettings } from "./GroupsettingsWrapper";
function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}
const Groupsettinglower = () => {
  const {state,dispatch} = useContext(Viewsettings); 
   
  const Wrapper = styled.section`
    .addRemoveBtnGs {
      width: 120px;
    }
    @media (max-width:600px) {
        .addRemoveBtnGs {
      width: 100px;
    }
    }
    @media (max-width:500px) {
        .addRemoveBtnGs {
      width: 70px;
      margin: 0px 3px;
    }
    }
  `;
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} sx={{display:state==="1"?"none":""}}>
          <div className="allFollowerslistGs">
            <List>
              {generate(
                <ListItem
                  sx={{ borderBottom: 0.3 }}
                  secondaryAction={
                    <Button
                      variant="contained"
                      sx={{
                        borderColor: "#5858FC",
                        backgroundColor: "#5858fc",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#000",
                          borderColor: "#000",
                          color: "#fff",
                          // boxShadow: "none",
                        },
                      }}
                    >
                      Remove
                    </Button>
                  }
                >
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        outline: "1px solid black",
                        border: "2px solid white",
                      }}
                    >
                      <img src="https://pps.whatsapp.net/v/t61.24694-24/291130683_355936526700033_2724619031560912413_n.jpg?ccb=11-4&oh=01_AVw2mtwv8kCv2R934NmM4tcQALJnIXyyYWT9C6bsiScdDQ&oe=62EA1E45" width="40" height="40" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Pubali Dey" />
                </ListItem>
              )}
            </List>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} sx={{display:state==="1"?"":"none"}}>
          <div className="allFollowerslistGs">
            <List>
              {generate(
                <ListItem
                  sx={{ borderBottom: 1 }}
                  secondaryAction={
                    <>
                      <Button
                        className="addRemoveBtnGs"
                        variant="contained"
                        sx={{
                          borderColor: "#5858FC",
                            backgroundColor: "#5858fc",
                          color: "#fff",
                          mx: 2,
                          "&:hover": {
                            backgroundColor: "#000",
                            borderColor: "#000",
                            color: "#fff",
                            // boxShadow: "none",
                          },
                        }}
                      >
                        Add
                      </Button>
                      <Button
                        className="addRemoveBtnGs"
                        variant="outlined"
                        sx={{
                          borderColor: "#5858FC",
                        //   backgroundColor: "#5858fc",
                          color: "#5858FC",
                          "&:hover": {
                            backgroundColor: "#000",
                            borderColor: "#000",
                            color: "#fff",
                            // boxShadow: "none",
                          },
                        }}
                      >
                        Remove
                      </Button>
                    </>
                  }
                >
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        outline: "1px solid black",
                        border: "2px solid white",
                      }}
                    >
                      <img src="" width="40" height="40" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Aryadeep Chakraborty" />
                </ListItem>
              )}
            </List>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Groupsettinglower;
