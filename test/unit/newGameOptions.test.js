import { endOfGame } from '../../src/js/lib/options';
import * as  resultText from '../../src/js/views/resultText';

jest.mock('../../src/js/views/resultText');

describe('End of game', () => {
  describe('user wins', () => {
    window.userScore = 5;
    window.finalResult = 5;

    test('shows message "End of game"', () => {
      endOfGame();
      expect(resultText.changeTextFirstRow).toBeCalledWith('End of game');
    });
    test.todo('shows message "Congrats"');
    test.todo('paint with win color');
    test.todo('the score is restarted');
  });
  describe('computer wins', () => {
    window.computerScore = 5;
    window.finalResult = 5;

    test.todo('shows message "End of game"');
    test.todo('shows message "Maybe next time"');
    test.todo('paint with loose color');
    test.todo('the score is restarted');
  });
});
