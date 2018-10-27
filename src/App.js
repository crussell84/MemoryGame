import React from 'react';
import './App.css';
import Header from './components/Header';
import Rules from './components/Rules';
import Scores from './components/Scores';
import Images from './components/Images';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Rules />
        <Scores />
        <Images />
      </div>
    );
  }
}

export default App;
