import { render, screen } from '@testing-library/react';
import { Scoreboard } from './Scoreboard';
import { IPlayer } from '../../interfaces/IPlayer';

describe('Scoreboard', () => {
  const player: IPlayer = {
    name: 'Musa',
    score: 0,
  };

  it('should show the player name', () => {
    render(<Scoreboard {...player} />);

    expect(screen.getByText(player.name)).toBeInTheDocument();
  });

  it('should show the player score', () => {
    render(<Scoreboard {...player} />);

    expect(screen.getByText(player.score)).toBeInTheDocument();
  });
});
