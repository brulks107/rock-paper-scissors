import { clearScore } from '../lib/options.js';
import { changeTextFirstRow, changeTextSecondRow } from '../views/resultText.js';

const startNewGame = () => {
  clearScore();
  changeTextFirstRow(resultTextInitialMessage);
  changeTextSecondRow('');
  console.log('NEW GAME STARTED');
}

export default startNewGame;
