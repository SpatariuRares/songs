import { combineReducers } from "redux";

const songReducer = () => {
    return[
        {title:"ciao",duration:"4:50",tag:"country"},
        {title:"fsdfsf",duration:"4:50",tag:"country"},
        {title:"ciagsdfsdfo",duration:"4:50",tag:"country"},
        {title:"cisdgdsfao",duration:"4:50",tag:"country"}
    ]
};


const selectedSongReducer=(selectedSong=null,action)=>{
    if (action.type==="SONG_SELECTED"){
        return action.payload;
    }

    return selectedSong;
};


export default combineReducers({
    songs:songReducer,
    selectedSong:selectedSongReducer
})