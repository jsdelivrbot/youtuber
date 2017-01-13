import React, { Component } from 'react';
import styles from '../styles/main';

// create button component

class Button extends Component {
  constructor(props) {
    super(props);
      this.state = {isToggleOn: true};

      this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    console.log('toggled');
    this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }));
  }
  render() {
    return <button style={styles.button} onClick={this.onButtonClick} type="submit"> {this.state.isToggleOn ? 'Let\'s Roll!' : 'Stop'} </button>;
  }
};

module.exports = Button;
