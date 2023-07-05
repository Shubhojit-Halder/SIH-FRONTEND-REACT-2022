import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import { useSelector } from "react-redux";
export default function AlignItemsList() {
  const Text = styled.span`
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
  `;
  var s =
    "How are you **lucciiiiiiiiii**\nlllllllllllllllllllllllllllllllllllllllllllllllllllllllllll\nlllllllllllllllllllllllllllllllllllllllllllllllllliiiiiiiiiiiiii garment ggggggggggggggggggggggggggggggggg\ngggggggggggggggggggggggggggggggggg";
  const [more, setMore] = React.useState(false);
  const image = useSelector((state) => state.commentslice.image);
  const message = useSelector((state) => state.commentslice.message);
  const imgValue = 	image!="" ? "![Alt text]"+"("+image+")" : ""
  return (
    <List
      sx={{
        width: "95%",
        bgcolor: "background.paper",
        contain: "content",
        borderRadius: "5px",
      }}
    >
      <ListItem alignItems="flex-start" sx={{ borderRadius: "5px" }}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <div>
          {/* <Text>{!more ? s.slice(0, 30) : s}</Text> */}
          {!more ? (
            <MDEditor.Markdown
              source={message.slice(0, 50)}
              style={{
                whiteSpace: "pre-wrap",
                background: "#fff",
                color: "#000",
              }}
            />
          ) : (
            <MDEditor.Markdown
              source={message + imgValue}
              style={{
                whiteSpace: "pre-wrap",
                background: "#fff",
                color: "#000",
              }}
            />
          )}
          <br />
          <span
            style={{ fontWeight: "700", cursor: "pointer", fontSize: "12px" }}
            onClick={() => {
              setMore((pre) => !pre);
            }}
          >
            {!more ? " Show More..." : " Show Less"}
          </span>
        </div>
      </ListItem>
    </List>
  );
}
