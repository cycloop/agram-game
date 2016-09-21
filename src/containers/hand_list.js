import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hand from './hand';


class HandList extends Component {
  renderList(){

    return this.props.hands.map( (hand) =>
        <Hand hand={hand} />
    )
  }

  render() {

    if (!this.props.hands){
      return <div></div>
    }

    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    hands: state.game.hands
  };
}

export default connect(mapStateToProps)(HandList);
