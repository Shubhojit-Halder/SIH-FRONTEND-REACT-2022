import React, { useState } from "react";
import { PiWrapper } from "../../styles/PiWrappper.styled";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { IconButton } from "@mui/material";
const ContactInfoItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <PiWrapper>
      {!open ? (
        <div className="itematLevelsPI">
          <div className="itematLevelsPIDIV">
            <div className="avatarPI">{props.icon}</div>
            <div className="ansPI">
              {props.data}
              <br/>
              {props.typeof}
            </div>
          </div>
          <div className="editBtnsPI">
            <IconButton className="EditbtnPI">
              <DeleteRoundedIcon />
            </IconButton>
            <IconButton
              className="EditbtnPI"
              onClick={() => {
                setOpen(true);
              }}
            >
              <CreateRoundedIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        <div className="textfieldPI">
          <input type="text" className="textAreaPI" />
          <IconButton
            className="EditbtnPI"
            onClick={() => {
              setOpen(false);
            }}
          >
            <DoneRoundedIcon />
          </IconButton>
        </div>
      )}
    </PiWrapper>
  );
};
export default ContactInfoItem;
