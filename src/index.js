import _ from 'lodash';
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
//import ReactSlickDemo from './components/slider';

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
    this.videoSearch('always sunny in philadelphia')
  }

  videoSearch(term) {
    // YouTube API fetching videos
    YTSearch({key: YouTube_API_Key, term: term}, (videos) => {
      console.log('yt', videos)
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });

    //const debounced = _.debounce(onSearchTermChange, 500, {'maxWait': 1000});
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <main style={styles.main}>
        <h1>Youtuber </h1>
        <SearchBar
          onSearchTermChange={videoSearch}
          //onDebounce={this.state.debounced}
         />
        <Button />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
