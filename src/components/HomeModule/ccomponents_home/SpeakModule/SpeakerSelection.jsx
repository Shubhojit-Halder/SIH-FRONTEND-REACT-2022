import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import Slider from "@mui/material/Slider";
import { List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSpeaker } from "../../home/slices/SpeakModuleSlice";
import { useState } from "react";

const SpeakerSelection = () => {
  const dispatch = useDispatch();
  const captiondata = useSelector((state) => state.speakmodule.caption);
  const startstate = useSelector((state) => state.speakmodule.start);
  const playstate = useSelector((state) => state.speakmodule.pause);
  const rateState = useSelector((state) => state.speakmodule.rate);
  const pitchState = useSelector((state) => state.speakmodule.pitch);
  const [chosenVoice, chooseVoice] = React.useState({});
  const [speakerName, setSpeakerName] = React.useState("");
  const speakerRef = window.speechSynthesis;
  const [value, setValue] = React.useState("");
  const [bol, setBol] = React.useState("");
  const [list, setList] = React.useState([]);
  const [rate, setRate] = useState(rateState);
  const [pitch, setPitch] = useState(pitchState);
  const handleChange = (event) => {
    setSpeakerName(event.target.value);
  };
  useEffect(() => {
    setValue(captiondata);
  });
  useEffect(() => {
    let arr = getList();
    let newList = arr.filter(
      (value) =>
        value.lang.substr(0, 2) == "en" ||
        value.lang.substr(0, 2) == "hi" /* && value.lang.substr(3, 5) == "IN" */
    );
    const [def] = newList.filter((value) => value.default === true);
    chooseVoice(def);
    console.table(newList);
    setList(newList);
  }, [speakerRef]);
  const getList = () => {
    let voices = speechSynthesis.getVoices().sort((a, b) => {
      const aname = a.name.toUpperCase();
      const bname = b.name.toUpperCase();

      if (aname < bname) {
        return -1;
      } else if (aname == bname) {
        return 0;
      } else {
        return +1;
      }
    });
    return voices;
  };
  const translate = async (text) => {
    const trasText = await axios.post("http://localhost:8088/translate", {
      source: "en",
      target: "hi",
      text: text,
    });
    // console.log(trasText.data);
    return trasText.data;
  };
  const speakMouth = (bol) => {
    console.log("while speaking", bol);
    const utter = new SpeechSynthesisUtterance(bol);
    utter.voice = chosenVoice;
    utter.rate = parseInt(rateState);
    utter.pitch = parseInt(pitchState);
    // utter.volume = parseInt(rate);
    speakerRef.speak(utter);
  };
  // useEffect(() => {
  //   // setRate(rateState);
  //   utter.rate = parseInt(rate);
  //   console.log("setrate", rate);
  // }, [rateState]);
  // useEffect(() => {
  //   utter.pitch = parseInt(pitch);
  //   console.log("setpitch", pitch);
  // }, [pitchState]);
  const tab = (unit) => {
    return (
      <MenuItem
        value={unit.name}
        onClick={async (e) => {
          if (unit.lang.substr(0, 2) == "hi") {
            const tt = await translate(value);
            console.log("translated", tt);
            setBol(tt);
          } else {
            setBol(value);
          }
          chooseVoice(unit);
          if (speakerRef.speaking) speakerRef.cancel();
          dispatch(setSpeaker(unit.name));
        }}
      >
        {unit.name}
      </MenuItem>
    );
  };
  return (
    <>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-label">Select Speaker</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={speakerName}
          label="Select Speaker"
          onChange={handleChange}
        >
          {list.map((unit) => tab(unit))}
        </Select>
      </FormControl>

      {startstate ? (
        !speakerRef.speaking ? (
          speakMouth(bol)
        ) : (
          <></>
        )
      ) : (
        speakerRef.cancel()
      )}
      {!playstate ? (
        !speakerRef.paused ? (
          speakerRef.pause()
        ) : (
          <></>
        )
      ) : (
        speakerRef.resume()
      )}
      {/* <button
        onClick={() => {
          if (!speakerRef.speaking) speakMouth(bol);
        }}
      >
        Speak
      </button>
      <button
        onClick={() => {
          if (speakerRef.speaking) speakerRef.cancel();
        }}
      >
        stop
      </button> 
      <button
            onClick={() => {
              if (!speakerRef.paused) speakerRef.pause();
            }}
          >
            Pause
          </button>{" "}
          <button
            onClick={() => {
              if (speakerRef.paused) speakerRef.resume();
            }}
          >
            Resume
          </button>*/}
    </>
  );
};

export default SpeakerSelection;
