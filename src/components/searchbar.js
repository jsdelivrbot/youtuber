import React, { Component } from 'react';
import styles from '../styles/main';

// create new searchbar component

class SearchBar extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);

    this.state = {term: 'Enter your videoz!'};
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }

  render() {
    console.log('render');
    return (
      <div>
        <input
          value={this.state.term}
          onChange={this.onInputChange} style={styles.inputDisplay} type="text" placeholder="Enter Your Videoz" 
        />

        <div className="searchValue" style={styles.searchValue}> Value of the input: <span className="searchTerm" style={styles.searchTerm}>{this.state.term} </span> 
        </div>

      </div>
    )
  }
}

module.exports = SearchBar;
