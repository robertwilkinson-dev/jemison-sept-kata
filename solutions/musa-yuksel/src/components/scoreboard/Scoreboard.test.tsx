import { render, screen } from '@testing-library/react';
import { Scoreboard } from './Scoreboard';
import { IPlayer } from '../../interfaces';
// import { IPlayer } from '../../interfaces/IPlayer';

describe('Scoreboard', () => {
  const player: IPlayer = {
    name: 'Musa',
    score: 0,
  };

  it('should show the player name', () => {
    render(
      <Scoreboard
        {...player}
        isDeuce={false}
        hasWon={false}
        hasAdvantage={false}
      />
    );

    expect(screen.getByText(player.name)).toBeInTheDocument();
  });

  it('should show score as LOVE. Score:0', () => {
    render(
      <Scoreboard
        {...player}
        isDeuce={false}
        hasWon={false}
        hasAdvantage={false}
      />
    );

    expect(screen.getByText('LOVE')).toBeInTheDocument();
  });
});
