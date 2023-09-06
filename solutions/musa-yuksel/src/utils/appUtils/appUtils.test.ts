import { hasPlayer1Advantage } from './appUtils';

describe('hasPlayer1Advantage', () => {
  it('should return true when player 1 has advantage', () => {
    const players = [
      { name: 'Player 1', score: 5 },
      { name: 'Player 2', score: 4 },
    ];
    const result = hasPlayer1Advantage(players);
    expect(result).toBe(true);
  });

  it('should return false when score is lover than 4', () => {
    const players = [
      { name: 'Player 1', score: 3 },
      { name: 'Player 2', score: 3 },
    ];
    const result = hasPlayer1Advantage(players);
    expect(result).toBe(false);
  });

  it('returns false when player 2 has advantage', () => {
    const players = [
      { name: 'Player 1', score: 5 },
      { name: 'Player 2', score: 6 },
    ];
    const result = hasPlayer1Advantage(players);
    expect(result).toBe(false);
  });
});
