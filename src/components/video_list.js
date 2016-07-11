import React,{ Component } from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const videosItem = props.videos.map((video)=>{
    console.log('videosItems¡: ',video);
    return <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key = {video.etag}
        videos = {video}/>
  });

  return(
    <ul className="col-md-4 list-group">
      {videosItem}
    </ul>
  );
}

export default VideoList;
