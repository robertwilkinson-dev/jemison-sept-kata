import {
  hasPlayer1Advantage,
  hasPlayer1Won,
  hasPlayer2Advantage,
  hasPlayer2Won,
  isGameDeuce,
} from './appUtils';

describe('hasPlayer1Advantage', () => {
  it('should return true when player 1 has advantage. Score: 5-4', () => {
    const players = [
      { name: 'Player 1', score: 5 },
      { name: 'Player 2', score: 4 },
    ];

    const result = hasPlayer1Advantage(players);

    expect(result).toBe(true);
  });

  it('should return false when score is lover than 4. Score:3-3', () => {
    const players = [
      { name: 'Player 1', score: 3 },
      { name: 'Player 2', score: 3 },
    ];

    const result = hasPlayer1Advantage(players);

    expect(result).toBe(false);
  });

  it('returns false when player 2 has advantage. Score:5-6', () => {
    const players = [
      { name: 'Player 1', score: 5 },
      { name: 'Player 2', score: 6 },
    ];

    const result = hasPlayer1Advantage(players);

    expect(result).toBe(false);
  });
});

describe('hasPlayer2Advantage', () => {
  it('should return true when player 2 has advantage. Score:4-5', () => {
    const players = [
      { name: 'Player 1', score: 4 },
      { name: 'Player 2', score: 5 },
    ];

    const result = hasPlayer2Advantage(players);

    expect(result).toBe(true);
  });

  it('should return false when score is lover than 4. Score:3-3', () => {
    const players = [
      { name: 'Player 1', score: 3 },
      { name: 'Player 2', score: 3 },
    ];

    const result = hasPlayer2Advantage(players);

    expect(result).toBe(false);
  });

  it('returns false when player 1 has advantage. Score:6-5', () => {
    const players = [
      { name: 'Player 1', score: 6 },
      { name: 'Player 2', score: 5 },
    ];

    const result = hasPlayer2Advantage(players);

    expect(result).toBe(false);
  });
});

describe('hasPlayer1Won', () => {
  it('should return true when player 1 has won. Score:6-4', () => {
    const players = [
      { name: 'Player 1', score: 6 },
      { name: 'Player 2', score: 4 },
    ];

    const result = hasPlayer1Won(players);

    expect(result).toBe(true);
  });

  it('should return false when player 1 has advantages. Score:5-4', () => {
    const players = [
      { name: 'Player 1', score: 5 },
      { name: 'Player 2', score: 4 },
    ];

    const result = hasPlayer1Won(players);

    expect(result).toBe(false);
  });

  it('should return false when player 2 won. Score:4-6', () => {
    const players = [
      { name: 'Player 1', score: 4 },
      { name: 'Player 2', score: 6 },
    ];

    const result = hasPlayer1Won(players);

    expect(result).toBe(false);
  });
});

describe('hasPlayer2Won', () => {
  it('should return true when player 2 has won. Score:4-6', () => {
    const players = [
      { name: 'Player 1', score: 4 },
      { name: 'Player 2', score: 6 },
    ];

    const result = hasPlayer2Won(players);

    expect(result).toBe(true);
  });

  it('should return false when player 2 has advantages. Score:4-5', () => {
    const players = [
      { name: 'Player 1', score: 4 },
      { name: 'Player 2', score: 5 },
    ];

    const result = hasPlayer2Won(players);

    expect(result).toBe(false);
  });

  it('should return false when player 1 won. Score:6-4', () => {
    const players = [
      { name: 'Player 1', score: 6 },
      { name: 'Player 2', score: 4 },
    ];

    const result = hasPlayer2Won(players);

    expect(result).toBe(false);
  });
});

describe('isGameDeuce', () => {
  it('should return true when score is 3-3', () => {
    const players = [
      { name: 'Player 1', score: 3 },
      { name: 'Player 2', score: 3 },
    ];

    const result = isGameDeuce(players);

    expect(result).toBe(true);
  });

  it('should return false when score is 4-3', () => {
    const players = [
      { name: 'Player 1', score: 4 },
      { name: 'Player 2', score: 3 },
    ];

    const result = isGameDeuce(players);

    expect(result).toBe(false);
  });
});
// export const isGameDeuce = (players: IPlayer[]) => {
//     const [player1, player2] = players;

//     return (
//       player1.score >= 3 && player2.score >= 3 && player1.score === player2.score
//     );
//   };
