import React from "react";
import ReactDOM from "react-dom";
import AudioPlayer from "../src/components/musicplayer/AudioPlayer";
import tracks from "../src/components/musicplayer/tracks";
import Clock from "../src/components/clock/Clock";
import Tracklist from "./components/tracklist/tracklist";
import Context from "./components/context/Context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Context/> <br/><br/><br/>
    <Clock/>
    <div className="judul">
        <h1>Music Player</h1>
    </div>
   <AudioPlayer tracks={tracks} />
   <div className="judul">
        <h1>Track List</h1>
    </div>
   <Tracklist/> <br/><br/>
   
  </React.StrictMode>,
  rootElement
);
