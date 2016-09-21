import React from 'react';

const Card = ({card}) =>{
  return (
    <div className={`card rank-${card.rank} ${card.suit}`}>
      <span className="rank">{card.rank}</span>
      <span className="suit" dangerouslySetInnerHTML={{__html: `&${card.suit};`}}/>
    </div>
  );
}

export default Card;

// TO IMPLEMENT WITH IMPORT

// <div className={`${Styles['card']} ${Styles['rank-' + card.rank]} ${Styles[card.suit]}`}>
//   <span className={Styles.rank}>{card.rank}</span>
//   <span className={Styles.suit}>&{card.suit};</span>
// </div>
