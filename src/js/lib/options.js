export const clearScore = () => {
  userScore = 0;
  computerScore = 0;
}

export const showWinMessage = () => console.log('WIN');

export const showLoseMessage = () => console.log('LOSE');

export const showDrawMessage = () => console.log('DRAW');

export const increaseUserScore = () => {
  userScore += 1;
  console.log(`RESULT: ${userScore}:${computerScore}`);
}

export const increaseComputerScore = () => {
  computerScore += 1;
  console.log(`RESULT: ${userScore}:${computerScore}`);
}

export const endOfGame = () => {
  if (userScore >= finalResult || computerScore >= finalResult) {
    showWinerMessage(userScore, computerScore);
    clearScore();
  }

}

const showWinerMessage = (user, computer) => {
  return (user > computer) ? console.log('USER WINS! :)') : console.log('USER LOSES :(');
}
