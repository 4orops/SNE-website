import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song1 from "../Assets/song1.mp4"


const Player = () => (
  <AudioPlayer
    autoPlay={false}
    src={song1} 
    onPlay={(e) => console.log("onPlay")} 
  />
);

export default Player;
