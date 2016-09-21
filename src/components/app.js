import React, { Component } from 'react';
import Title from './title.js';
import StartGame from '../containers/start_game';
import HandList from '../containers/hand_list';
import CardToBeat from '../containers/CardToBeat';

export default class App extends Component {
  render() {
    return (
      <div className="playingCards simpleCards">
        <Title />
        <StartGame />
        <HandList />
        <CardToBeat />
      </div>
    );
  }
}
