import React from "react";
import SongDetail from "./SongDetail";
import SongList from "./SongList";


const App=()=>{
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column six wide">
                    <SongList />
                </div>
                <div className="column six wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}

export default App;