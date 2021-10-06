import React from 'react'
import ReactDOM from "react-dom";
import VideoPlayer from "react-background-video-player";

export default function BackgroundVideos(props) {
    return (
        <VideoPlayer
        className="video"
        
        src={props.url}
        autoPlay={true}
        muted={true}
      />
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<BackgroundVideos />, rootElement);
