import { render, screen } from '@testing-library/react';
import { Scoreboard } from './Scoreboard';
import { IPlayer } from '../../interfaces';

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

  it('should show score as 15. Score:1', () => {
    render(
      <Scoreboard
        {...player}
        score={1}
        isDeuce={false}
        hasWon={false}
        hasAdvantage={false}
      />
    );

    expect(screen.getByText('15')).toBeInTheDocument();
  });

  it('should show score as 30. Score:2', () => {
    render(
      <Scoreboard
        {...player}
        score={2}
        isDeuce={false}
        hasWon={false}
        hasAdvantage={false}
      />
    );

    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('should show score as 40. Score:3', () => {
    render(
      <Scoreboard
        {...player}
        score={3}
        isDeuce={false}
        hasWon={false}
        hasAdvantage={false}
      />
    );

    expect(screen.getByText('40')).toBeInTheDocument();
  });

  it('should show score as WINNER. hasWon=true', () => {
    render(
      <Scoreboard
        {...player}
        score={4}
        isDeuce={false}
        hasWon={true}
        hasAdvantage={false}
      />
    );

    expect(screen.getByText('WINNER')).toBeInTheDocument();
  });

  it('should show score as DEUCE. isDeuce=true', () => {
    render(
      <Scoreboard
        {...player}
        isDeuce={true}
        hasWon={false}
        hasAdvantage={false}
      />
    );
  });

  it('should show score as ADVANTAGE. hasAdvantage=true', () => {
    render(
      <Scoreboard
        {...player}
        isDeuce={false}
        hasWon={false}
        hasAdvantage={true}
      />
    );

    expect(screen.getByText('ADVANTAGE')).toBeInTheDocument();
  });
});
