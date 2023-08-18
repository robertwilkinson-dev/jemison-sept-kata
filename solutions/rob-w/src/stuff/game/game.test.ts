import { Player } from '../player';
import { Game } from './game';

const playerOneName = 'player 1';
const playerTwoName = 'player 2';

const setup = () => {
  const playerOne = new Player({ name: playerOneName});
  const playerTwo = new Player({ name: playerTwoName });

  const game = new Game({ playerOne, playerTwo });

  return {
    game,
    playerOne,
    playerTwo
  };
};

describe('Game', () => {
  it('a new game should be "Love all"', () => {
    const { game } = setup();

    expect(game.getScore()).toEqual('Love all');
  });

  it('should return "Fifteen, Love" when player one scores', () => {
    const { game, playerOne } = setup();

    playerOne.addPoint();

    expect(game.getScore()).toEqual('Fifteen, Love');
  });

  it('should return "Fifteen all" when player one and player two score', () => {
    const { game, playerOne, playerTwo } = setup();

    playerOne.addPoint();
    playerTwo.addPoint();

    expect(game.getScore()).toEqual('Fifteen all');
  });

  it('should return "Love, Thirty" player two has two points', () => {
    const { game, playerTwo } = setup();

    playerTwo.overrideScore(2);

    expect(game.getScore()).toEqual('Love, Thirty');
  });

  it('should return "Forty, Love" player two has two points', () => {
    const { game, playerOne } = setup();

    playerOne.overrideScore(3);

    expect(game.getScore()).toEqual('Forty, Love');
  });

  it('should return "Deuce" both players have 3 points', () => {
    const { game, playerOne, playerTwo } = setup();

    playerOne.overrideScore(3);
    playerTwo.overrideScore(3);

    expect(game.getScore()).toEqual('Deuce');
  });

  it('should return "Winner: ${name}" when a the score is 4 - 0', () => {
    const { game, playerOne } = setup();

    playerOne.overrideScore(4);

    expect(game.getScore()).toEqual(`Winner: ${playerOneName}`);
  });

  it('should return "Winner: ${name}" when a the score is 1 - 4', () => {
    const { game, playerOne, playerTwo } = setup();

    playerOne.overrideScore(1);
    playerTwo.overrideScore(4);

    expect(game.getScore()).toEqual(`Winner: ${playerTwoName}`);
  });

  it('should return "Deuce" when a the score is 4 - 4', () => {
    const { game, playerOne, playerTwo } = setup();

    playerOne.overrideScore(4);
    playerTwo.overrideScore(4);

    expect(game.getScore()).toEqual('Deuce');
  });

  it('should return "Advantage: ${playerOneName}" when a the score is 5 - 4', () => {
    const { game, playerOne, playerTwo } = setup();

    playerOne.overrideScore(5);
    playerTwo.overrideScore(4);

    expect(game.getScore()).toEqual(`Advantage: ${playerOneName}`);
  });
  
  it('should return "Advantage: ${playerTwoName}" when a the score is 4 - 5', () => {
    const { game, playerOne, playerTwo } = setup();

    playerOne.overrideScore(4);
    playerTwo.overrideScore(5);

    expect(game.getScore()).toEqual(`Advantage: ${playerTwoName}`);
  });
  it('should return "Advantage: ${playerTwoName}" when a the score is 4 - 5', () => {
    const { game, playerOne, playerTwo } = setup();

    playerOne.overrideScore(4);
    playerTwo.overrideScore(5);

    expect(game.getScore()).toEqual(`Advantage: ${playerTwoName}`);
  });

  it('should return "Winner: ${playerOneName}" when a the score is 8 - 6', () => {
    const { game, playerOne, playerTwo } = setup();

    playerOne.overrideScore(8);
    playerTwo.overrideScore(6);

    expect(game.getScore()).toEqual(`Winner: ${playerOneName}`);
  });

  it('should return "Winner: ${playerTwoName}" when a the score is 6 - 8', () => {
    const { game, playerOne, playerTwo } = setup();

    playerOne.overrideScore(6);
    playerTwo.overrideScore(8);

    expect(game.getScore()).toEqual(`Winner: ${playerTwoName}`);
  });
});
