import React, { useState } from "react";
import "./App.css";
import Video from "./Video";

const [videos, setVideos] = useState([]);

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({ url, channel, description, song, likes, messages }) => {
          <Video />;
        })}
        <Video
          url="https://mp4tamil.com/videos/video/Tamil_Yearly_Video_Songs/2018_Tamil_Movies_Video_Songs/Tamizh_Padam_2_Video_Songs/Naan_Yaarumilla_-_Tamizh_Padam_2_480p_-_Mp4Tamil.Com.mp4"
          channel="Tamil Padam 2.0"
          description="Hero Entry Song"
          song="Naa Yarumilla - Tamil Padam 2.0"
          likes="2060452"
          messages="23.8k"
          shares="345k"
        />
        <Video
          channel="Tamil Padam 2.0"
          description="Climax Mass Mance Song"
          song="En Nadanam - Tamil Padam 2.0"
          likes="431321"
          messages="24.1k"
          shares="213k"
          url="https://mp4tamil.com/videos/video/Tamil_Yearly_Video_Songs/2018_Tamil_Movies_Video_Songs/Tamizh_Padam_2_Video_Songs/En_Nadanam_-_Tamizh_Padam_2_480p_-_Mp4Tamil.Com.mp4"
        />
        <Video
          channel="96 Movie"
          description="Love song for ages"
          song="Kathale Kathale - 96"
          likes="34134"
          messages="44.3k"
          shares="535.3k"
          url="https://mp4tamil.com/videos/video/Tamil_Yearly_Video_Songs/2018_Tamil_Movies_Video_Songs/96_Video_Songs/Kaathalae_Kaathalae_-_96_480p_-_Mp4Tamil.Com.mp4"
        />
      </div>
    </div>
  );
}

export default App;
