import React, { Component } from 'react';
import Card from '../components/card';
import { selectCard } from '../actions/index';
import { connect } from 'react-redux';

class Hand extends Component {
  renderList(){
    return this.props.hand.map((card) => (
      <div className="cardDiv" onClick={() => this.props.selectCard(card) }>
        <Card
          key={card.suit+card.rank}
          card={card}
        />
      </div>
    ))
  }

  render(){
    return (
    <div className="hand">
      {this.renderList()}
    </div>
    );
  }
}

const mapActionCreators = {
  selectCard: (card) => selectCard(card)
}



export default connect(null, mapActionCreators)(Hand);
