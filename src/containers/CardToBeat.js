import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card';


class CardToBeat extends Component {

  render(){
    if (!this.props.playCard) {
      return (<div></div>);
    }
        
    return (
      <div>
        <Card card={this.props.playCard} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    playCard: state.game.playCard
  }
}

export default connect(mapStateToProps)(CardToBeat);
