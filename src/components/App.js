import React, { Component } from 'react';
import ProgressBar from './container/ProgressBar'
import { AppWrapper } from '../styles/stylesComponent'

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <ProgressBar />
      </AppWrapper>
    );
  }
}

export default App;
