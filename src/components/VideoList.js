import React from 'react';
import VideoListItem from './VideoListItem';
import styles from '../styles/main';

const VideoList = (props) => {
  const videoItems = props.videos.map((video, index) => {
    console.log('video', video);
    return (
      <VideoListItem 
        style={styles.li} 
        key={video.etag} 
        video={video}
        onVideoSelect={props.onVideoSelect}
      />
    )
  });
  return (
      <ul style={styles.ul} className="col-md-4 list-group"> {videoItems} </ul>
    )
  }

module.exports = VideoList;
