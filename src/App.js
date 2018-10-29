import React from 'react';
import './App.css';
import Header from './components/Header';
import Rules from './components/Rules';
import Scores from './components/Scores';
import Images from './components/Images';
import imageArray from './images.json';

class App extends React.Component {
  state = {
    highScore: 0,
    currentScore: 0,
    clicked: []
  }

componentDidMount() {
  this.shuffleImages(imageArray);
  this.forceUpdate();
}

  handleImageClick = (id) => {
    const clickedId = id;
    const clickedImages = this.state.clicked;
    if (clickedImages.includes(clickedId)) {
      this.handleWrongGuess(clickedId);
    } else {
      this.handleGoodGuess(clickedId, clickedImages);
    }

  }

  handleWrongGuess = (id) => {
    this.shuffleImages(imageArray);
    this.setState({ clicked: [], currentScore: 0 });
  }

  handleGoodGuess = (id, arr) => {
    this.shuffleImages(imageArray);
    arr.push(id);
    const score = this.state.currentScore + 1;
    this.setState({clicked: arr, currentScore: score});
  }

  shuffleImages = images => {
    let i = images.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = images[i];
      images[i] = images[j];
      images[j] = temp;
      i--;
    }
    return images;
  };


  render() {
    return (
      <div className="App">
        <Header />
        <Rules />
        <Scores current={this.state.currentScore} high={this.state.highScore}/>
        <Images onClick={this.handleImageClick} />
      </div>
    );
  }
}

export default App;
