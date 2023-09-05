import { render, screen } from '@testing-library/react';
import { IPlayer, Scoreboard } from './Scoreboard';

describe('Scoreboard', () => {
  it('should show the player name', () => {
    const player: IPlayer = {
      name: 'Musa',
    };

    render(<Scoreboard {...player} />);
    expect(screen.getByText(player.name)).toBeInTheDocument();
  });
});
