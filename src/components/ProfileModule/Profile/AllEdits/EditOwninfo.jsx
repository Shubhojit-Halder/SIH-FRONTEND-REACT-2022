import { Grid } from "@mui/material";
import React from "react";
import Navbar from "../../../nav_and_fc/navbar_component/Navbar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import { inputfields } from "../../Datas/EditInfovalues";
import { EditPersonalDataWrapper } from "../../styles/Editowninfo.styled";

const EditOwninfo = () => {
  return (
    <>
      <Navbar />
      <EditPersonalDataWrapper>
        <Grid container sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
          <Grid item xs={12} sm={12} md={10} marginTop="75px">
            <div className="headerEGIP">Edit Personal Info</div>
            {inputfields.map((value, index) => {
              return (
                <>
                  <div className="singleElementEGIP">
                    <span className="tagsEGIP">{value.tags}</span>
                    { value.pre ===''?<></> :(
                        <div className="prevStoredValEGIP">{value.pre}</div>
                      )  }
                    <Paper
                      component="form"
                      className="editItemPaperEGIP"
                      sx={{
                        p: "5px",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "30px",
                      }}
                      key={index}
                    >
                      
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        className="IpBaseEGIP"
                        placeholder={value.placeholder}
                      />
                      <IconButton
                        type="submit"
                        sx={{ p: "10px",bgcolor:"#5858FC",color:"#fff"}}
                        aria-label="save"
                      >
                        <SaveIcon />
                      </IconButton>
                    </Paper>
                  </div>
                </>
              );
            })}
          </Grid>
        </Grid>
      </EditPersonalDataWrapper>
    </>
  );
};

export default EditOwninfo;
