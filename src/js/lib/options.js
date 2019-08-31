import * as resulText from '../views/resultText.js';
import { updateScore } from '../views/score.js';

const winColor = '#1FCE23';
const loseColor = '#a8251d';

export const clearScore = () => {
  userScore = 0;
  computerScore = 0;
}

export const increaseUserScore = () => {
  userScore += 1;
  console.log(`RESULT: ${userScore}:${computerScore}`);
  updateScore();
}

export const increaseComputerScore = () => {
  computerScore += 1;
  console.log(`RESULT: ${userScore}:${computerScore}`);
  updateScore();
}

export const scoreAfterDraw = () => updateScore()

export const endOfGame = () => {
  if (userScore >= finalResult) {
    resulText.changeTextFirstRow('End of game');
    resulText.changeToResultColor(winColor);
    resulText.changeTextSecondRow('CONGRATULATIONS!!!!');
    clearScore();
  }
  if (computerScore >= finalResult) {
    resulText.changeTextFirstRow('End of game');
    resulText.changeToResultColor(loseColor);
    resulText.changeTextSecondRow('Maybe next time');
    clearScore();

  }

}

const showWinerMessage = (user, computer) => {
  return (user > computer) ? console.log('USER WINS! :)') : console.log('USER LOSES :(');
}
