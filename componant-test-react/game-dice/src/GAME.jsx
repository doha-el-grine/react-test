// GAME.jsx

import React from "react";
import déImage from './img/Dé.jpg';
import face1Image from './img/face1.png';
import face2Image from './img/face2.png';
import face3Image from './img/face3.png';
import face4Image from './img/face4.png';
import face5Image from './img/face5.png';
import face6Image from './img/face6.png';
import "./GAME.css"; // Import your custom CSS file for styling

export default class GAME extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      face: null,
      compteur: 0,
      fin: false,
    };
  }

  PLAY = () => {
    const rolledFace = Math.floor(Math.random() * 6) + 1;
    this.setState({
      face: rolledFace,
      compteur: this.state.compteur + 1,
      fin: rolledFace === 6,
    });
  };

  getImage = () => {
    const { face } = this.state;
    return face === null ? déImage : this.getFaceImage(face);
  };

  getFaceImage = (face) => {
    switch (face) {
      case 1:
        return face1Image;
      case 2:
        return face2Image;
      case 3:
        return face3Image;
      case 4:
        return face4Image;
      case 5:
        return face5Image;
      case 6:
        return face6Image;
      default:
        return déImage;
    }
  };

  initialiser = () => {
    this.setState({ face: null, compteur: 0, fin: false });
  };

  render() {
    const styleImage = { width: "100px", height: "100px" }; // Increase image size
    return (
      <div className="game-container">
        <img src={déImage} alt="Dice" style={styleImage} />
        <img src={this.getImage()} alt="Dice" style={styleImage} />
        <h1 className="game-title">DICE ROLL GAME</h1>
        <h2 className="game-info">Face: {this.state.face !== null ? this.state.face : "..."}</h2>
        <h2 className="game-info">Tries: {this.state.compteur}</h2>
        <button className="play-button" onClick={this.PLAY}>ROLL THE DICE</button>
        {this.state.fin && <p className="success-message">GOOD JOB! YOU FOUND THE HIDDEN FACE</p>}
        <button className="replay-button" onClick={this.initialiser}>PLAY AGAIN</button>
      </div>
    );
  }
}
