import { showWinMessage, showLoseMessage, showDrawMessage, increaseUserScore, increaseComputerScore, endOfGame } from '../lib/options.js';

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

const game = userChoice => {
  const result = resultGame(userChoice);
  console.log(`USER: ${userChoice}`);

  const resultOptions = {
    'win': () => {
      showWinMessage()
      increaseUserScore();
    },
    'lose': () => {
      showLoseMessage();
      increaseComputerScore();
    },
    'draw': () => {
      showDrawMessage();
    },
  };

  resultOptions[result]();
  endOfGame(finalResult);

}

const resultGame = userChoice => {
  const computer = computerChoice();
  let returnValue;
  switch (`${userChoice}-${computer}`) {
    case `${rock}-${scissors}`:
    case `${paper}-${rock}`:
    case `${scissors}-${paper}`:
      returnValue = 'win';
      break;
    case `${paper}-${scissors}`:
    case `${rock}-${paper}`:
    case `${scissors}-${rock}`:
      returnValue = 'lose';
      break;
    case `${rock}-${rock}`:
    case `${paper}-${paper}`:
    case `${scissors}-${scissors}`:
      returnValue = 'draw';
      break;
  }
  return returnValue;
}

const computerChoice = () => {
  const choice = {
    '0': rock,
    '1': paper,
    '2': scissors,
  };
  const choiceNumber = Math.floor(Math.random() * 3);
  console.log(`COMPUTER: ${choice[choiceNumber]} `);

  return choice[choiceNumber];
}

export default game;
