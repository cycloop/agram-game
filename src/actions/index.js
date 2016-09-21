export function startGame(players){
  return {
    type: "START_GAME",
    payload: players
  };
}

export function selectCard(card){
  return {
    type: "SELECT_CARD",
    payload: card
  };
}
