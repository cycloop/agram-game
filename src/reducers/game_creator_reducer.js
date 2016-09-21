import * as _ from 'underscore';

function draw(players, deck) {
  let hands = [];
  let k=0, l=5;
  for (let i=0;i<players;i++){
    hands.push(deck.slice(k,l));
    k += 5;
    l += 5;
  }
  return hands
}

export default function(state = {}, action){
  switch (action.type){
    case 'START_GAME':
      const suits = ['spades', 'hearts', 'diams', 'clubs'];
      const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J','Q', 'K', 'A'];
      const value = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

      const agramCards = [{suit: 'spades', rank: "A"}];
      const agramCards2 = ['2', 'J', 'Q', 'K'];

      let cards = [];
      ranks.forEach((rank, key) => {
        return suits.forEach( suit => {
          return cards.push({
            suit: suit,
            rank: rank,
            value: value[key]
          });
        });
      });


      var playDeck = cards.filter( card => {
       return !((card.suit == agramCards[0].suit) && (card.rank == agramCards[0].rank));
      });

      agramCards2.forEach( rnk => {
        playDeck = playDeck.filter( card => card.rank != rnk);
      });
      playDeck = _.shuffle(playDeck);
      let hands = draw(action.payload, playDeck);
      let playCard;
      let gameStarted = true;
      console.log(gameStarted);
      return { hands, playCard, gameStarted };
    case 'SELECT_CARD':
        if (!state.playCard){
          return {...state, playCard: action.payload};
        }
        if (action.payload.suit == state.playCard.suit
         && action.payload.value > state.playCard.value){
          return {...state, playCard: action.payload};
        }
    default:
      return state;

  }
}
