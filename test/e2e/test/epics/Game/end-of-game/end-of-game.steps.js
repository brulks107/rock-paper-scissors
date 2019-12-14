import { When, Then, And } from 'cypress-cucumber-preprocessor/steps';

When(/^(.+) wins the game$/, player => {
  const winPlayer = {
    user: () => {
      cy.window().then((window) => {
        window.userScore = 4;
        window.computerScore = 0;
        window.computer.computerChoice = () => 'scissors';
      });
    },
    computer: () => {
      cy.window().then((window) => {
        window.userScore = 0;
        window.computerScore = 4;
        window.computer.computerChoice = () => 'paper';
      });
    },
  };
  winPlayer[player]();
  cy.get('#rock').click();
});

Then(/^the end of game text is shown$/, () => {
  cy.get('#result-text > p:nth-of-type(1)').should('have.text', 'End of game');
});

And(/^the text shows who wins with the text (.+)$/, text => {
  cy.get('#result-text > p:nth-of-type(2)').should('have.text', text);
});
