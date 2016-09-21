import { combineReducers } from 'redux';
import GameCreator from './game_creator_reducer';

const rootReducer = combineReducers({
  game: GameCreator
});

export default rootReducer;
