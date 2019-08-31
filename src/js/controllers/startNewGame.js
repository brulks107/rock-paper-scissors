import { clearScore } from '../lib/options.js';
import { changeTextFirstRow, changeTextSecondRow } from '../views/resultText.js';
import { updateScore } from '../views/score.js';

const startNewGame = () => {
  clearScore();
  changeTextFirstRow(resultTextInitialMessage);
  changeTextSecondRow('');
  updateScore();
  console.log('NEW GAME STARTED');
}

export default startNewGame;
