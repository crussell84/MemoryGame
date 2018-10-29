import React from 'react';
import './App.css';
import Header from './components/Header';
import Rules from './components/Rules';
import Scores from './components/Scores';
import Images from './components/Images';

class App extends React.Component {
  state = {
    clicked: false
  }

handleImageClick = (event) => {
  console.log(event);
}

  render() {
    return (
      <div className="App">
        <Header />
        <Rules />
        <Scores />
        <Images onClick={this.handleImageClick}/>
      </div>
    );
  }
}

export default App;
