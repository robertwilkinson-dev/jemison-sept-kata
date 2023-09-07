import { render, screen } from '@testing-library/react';
import { Scoreboard } from './Scoreboard';
import { IScoreboard } from '../../interfaces';

describe('Scoreboard', () => {
  const mockScoreboardProps: IScoreboard = {
    name: 'Musa',
    score: 0,
    isDeuce: false,
    hasAdvantage: false,
    hasWon: false,
  };

  it('should show the player name', () => {
    render(<Scoreboard {...mockScoreboardProps} />);

    expect(screen.getByText(mockScoreboardProps.name)).toBeInTheDocument();
  });

  it('should show score as LOVE. Score:0', () => {
    render(<Scoreboard {...mockScoreboardProps} />);

    expect(screen.getByText('LOVE')).toBeInTheDocument();
  });

  it('should show score as 15. Score:1', () => {
    render(<Scoreboard {...mockScoreboardProps} score={1} />);

    expect(screen.getByText('15')).toBeInTheDocument();
  });

  it('should show score as 30. Score:2', () => {
    render(<Scoreboard {...mockScoreboardProps} score={2} />);

    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('should show score as 40. Score:3', () => {
    render(<Scoreboard {...mockScoreboardProps} score={3} />);

    expect(screen.getByText('40')).toBeInTheDocument();
  });

  it('should show score as WINNER. hasWon=true', () => {
    render(<Scoreboard {...mockScoreboardProps} hasWon={true} />);

    expect(screen.getByText('WINNER')).toBeInTheDocument();
  });

  it('should show score as DEUCE. isDeuce=true', () => {
    render(<Scoreboard {...mockScoreboardProps} isDeuce={true} />);
  });

  it('should show score as ADVANTAGE. hasAdvantage=true', () => {
    render(<Scoreboard {...mockScoreboardProps} hasAdvantage={true} />);

    expect(screen.getByText('ADVANTAGE')).toBeInTheDocument();
  });
});
