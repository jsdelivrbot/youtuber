import React from 'react';
import ReactDOM from 'react-dom';

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
      <div> 
        <h1>MOAR BASS </h1>
        <SearchBar />
        <Button />
      </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'));
