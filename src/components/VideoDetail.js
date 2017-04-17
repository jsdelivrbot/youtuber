import React from 'react';
import styles from '../styles/main';

const VideoDetail = ({video}) => {

  if (!video) {
    return <div> <h2> "Loading ... " </h2> </div>
  }
  const videoId = video.id.videoId;
  const URL = `https://youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8" style={styles.videoDetail}>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={URL}></iframe>
      </div>

      <div className="details">
        <h2 className="title">{video.snippet.title}</h2>
        <div>{video.snippet.description}</div>
      </div>

    </div>
  )
}

module.exports = VideoDetail;
