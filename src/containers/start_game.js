import React, { Component } from 'react';
import { startGame } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



class StartGame extends Component {
  render () {
    if (this.props.gamestarted){
        return (
        <div>
          <span className="btn btn-primary">Play Card</span>
        </div>
      );
    }
    return (
      <div>
        <form>
          <span
            className="btn btn-primary"
            onClick={() => {
              this.props.startGame(this._players.value);
            }}>
            Start Game
          </span>
          <select id="player-select" ref={ (input) => this._players = input }>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </select>
        </form>
      </div>
    );
  }
}

function mapStateToProps (state){
    return {
      gamestarted: state.game.gameStarted
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ startGame: startGame }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(StartGame);
