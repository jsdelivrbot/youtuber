import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/main';
import YTSearch from 'youtube-api-search';

// component import

import SearchBar from './components/SearchBar';
import Button from './components/Button';
import VideoList from './components/VideoList';
import VideoListItem from './components/VideoListItem';
import VideoDetail from './components/VideoDetail';

// consts

const YouTube_API_Key = 'AIzaSyBq-mWPwn4YeaXPNFbH220ECf6CmUURG2s';

// create new component

// this component should produce some html

// take this components generated html and put it on page

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
     };

    // YouTube API fetching videos
    YTSearch({key: YouTube_API_Key, term: 'always sunny in philadelphia'}, (videos) => {
      console.log('yt', videos)
      this.setState({ 
        video: videos,
        /*selectedVideo: videos[0]*/
      });
    });
  }

  render() {
    return (
      <main style={styles.main} className="container"> 
        <h1>YouTuber</h1>
        <SearchBar />
        <Button />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
      </main>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
