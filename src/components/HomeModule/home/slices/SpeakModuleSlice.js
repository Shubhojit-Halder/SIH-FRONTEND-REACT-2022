import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
    caption: "", 
	speaker: "",
	rate:1,
	pitch:1,
	start:false,
	pause:false,
};

export const SpeakModuleSlice = createSlice({
	name: "speakmodule",
	initialState,
	reducers: {
		openSpeakMod: (state, action) => {
			console.log("dispatch", action.payload);
			state.value = action.payload;
		},
        setMessagetoRead: (state,action) =>{
            console.log("dispatch",action.payload);
            state.caption = action.payload;
        },
        setSpeaker: (state,action) =>{
            console.log("Speaker",action.payload);
            state.speaker = action.payload;
        },
        setReadingRate: (state,action) =>{
            console.log("readingRate",action.payload);
            state.rate = action.payload;
        },
        setReadingPitch: (state,action) =>{
            console.log("pitch",action.payload);
            state.pitch = action.payload;
        },
		setStartReading:(state,action)=>{
			console.log("start-stop",action.payload);
            state.start = action.payload;
		},
		setPauseReading:(state,action)=>{
			console.log("play-pause",action.payload);
            state.pause = action.payload;
		}
	},
});

export const {openSpeakMod,setMessagetoRead,setSpeaker,setReadingRate,setReadingPitch,setStartReading,setPauseReading} = SpeakModuleSlice.actions;

export default SpeakModuleSlice.reducer;

