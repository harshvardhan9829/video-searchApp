import "./videoItem.css";
import React from "react";
const VideosItems = ({ video, onVideoSelect }) => {
  return (
    <div
      className=" video-item item"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideosItems;
