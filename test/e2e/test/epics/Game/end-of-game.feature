Feature: End of game

  As a player
  I want to see the result when game ends
  So that I can see who wins

  Scenario Outline: Show result when game ends
    Given game started
    When <player> wins the game
    Then the end of game text is shown
    And the text shows who wins with the text <text>

    Examples:
      | player   | text                |
      | user     | CONGRATULATIONS!!!! |
      | computer | Maybe next time     |
