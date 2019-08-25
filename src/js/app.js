const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const rockElement = document.getElementById(rock);
const paperElement = document.getElementById(paper);
const scissorsElement = document.getElementById(scissors);
const newGameBtn = document.getElementById('new-game-button');
const finalResult = 5;

let userScore = 0;
let computerScore = 0;

rockElement.addEventListener('click', () => game(rock));

paperElement.addEventListener('click', () => game(paper));

scissorsElement.addEventListener('click', () => game(scissors));

newGameBtn.addEventListener('click', () => startNewGame())

const game = userChoice => {
    console.log(`USER: ${userChoice}`);
    const result = resultGame(userChoice);

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
    console.log(`COMPUTER: ${computer} `);
    return returnValue;
}

const computerChoice = () => {
    const choice = {
        '0': rock,
        '1': paper,
        '2': scissors,
    };
    const choiceNumber = Math.floor(Math.random() * 3);

    return choice[choiceNumber];
}

const showWinMessage = () => console.log('WIN');

const showLoseMessage = () => console.log('LOSE');

const showDrawMessage = () => console.log('DRAW');

const increaseUserScore = () => {
    userScore += 1;
    console.log(`RESULT: ${userScore}:${computerScore}`);
}

const increaseComputerScore = () => {
    computerScore += 1;
    console.log(`RESULT: ${userScore}:${computerScore}`);
}

const endOfGame = finalResult => {
    if (userScore >= finalResult || computerScore >= finalResult) {
        showWinerMessage(userScore, computerScore);
        clearScore();
    }

}

const clearScore = () => {
    userScore = 0;
    computerScore = 0;
}

const showWinerMessage = (user, computer) => {
    return (user > computer) ? console.log('USER WINS! :)') : console.log('USER LOSES :(');
}

const startNewGame = () => {
    clearScore();
    console.log('NEW GAME STARTED');
}
