import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/main';

// component import

import SearchBar from './components/searchbar';
import Button from './components/button';

// consts

const YouTube_API_Key = 'AIzaSyBq-mWPwn4YeaXPNFbH220ECf6CmUURG2s';

// create new component

// this component should produce some html

// take this components generated html and put it on page

const App = () => {
  return (
      <main style={styles.main} className="container"> 
        <h1>Surprise Me </h1>
        <SearchBar />
        <Button />
      </main>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'));
