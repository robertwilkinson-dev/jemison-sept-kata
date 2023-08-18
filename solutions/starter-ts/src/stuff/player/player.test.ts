import { Player } from './player';

const name = 'vader';

describe('Player', () => {
  it('sets up a new player correctly', () => {
    const player = new Player({ name });

    expect(player.name).toEqual('vader');
    expect(player.score).toEqual(0);
  });

  it('updates the players score when the addScore method is called', () => {
    const player = new Player({ name });

    player.addPoint();

    expect(player.score).toEqual(1);
  });

  it('updates the players score when the overrideScore method is called', () => {
    const player = new Player({ name });

    player.overrideScore(3);

    expect(player.score).toEqual(3);
  });

  describe('scoreName', () => {
    it('returns "Love" when the player score is 0', () => {
      const player = new Player({ name });

      expect(player.scoreName).toEqual('Love');
    });

    it('returns "Fifteen" when the player score is 1', () => {
      const player = new Player({ name });

      player.overrideScore(1);

      expect(player.scoreName).toEqual('Fifteen');
    });

    it('returns "Thirty" when the player score is 2', () => {
      const player = new Player({ name });

      player.overrideScore(2);

      expect(player.scoreName).toEqual('Thirty');
    });

    it('returns "Forty" when the player score is 3', () => {
      const player = new Player({ name });

      player.overrideScore(3);

      expect(player.scoreName).toEqual('Forty');
    });
  })
});
