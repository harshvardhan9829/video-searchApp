import React from "react";
import VideosItems from "./VideosItems";
const VideoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map((video) => {
    return (
      <VideosItems
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return (
    <div className=" ui relaxed divided list">{renderList}</div>
  );
};

export default VideoList;
