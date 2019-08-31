import * as resulText from '../views/resultText.js';

const winColor = '#1FCE23';
const loseColor = '#a8251d';

export const clearScore = () => {
  userScore = 0;
  computerScore = 0;
}

export const increaseUserScore = () => {
  userScore += 1;
  console.log(`RESULT: ${userScore}:${computerScore}`);
}

export const increaseComputerScore = () => {
  computerScore += 1;
  console.log(`RESULT: ${userScore}:${computerScore}`);
}

export const endOfGame = () => {
  if (userScore >= finalResult)  {
    resulText.changeTextFirstRow('End of game');
    resulText.changeToResultColor(winColor);
    resulText.changeTextSecondRow('CONGRATULATIONS!!!!');
    clearScore();
  }
  if (computerScore >= finalResult){
    resulText.changeTextFirstRow('End of game');
    resulText.changeToResultColor(loseColor);
    resulText.changeTextSecondRow('Maybe next time');
    clearScore();

  }

}

const showWinerMessage = (user, computer) => {
  return (user > computer) ? console.log('USER WINS! :)') : console.log('USER LOSES :(');
}
