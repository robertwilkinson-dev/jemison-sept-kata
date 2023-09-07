import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  const clickMultipleTimes = (button: HTMLElement, times: number) => {
    for (let i = 0; i < times; i++) {
      userEvent.click(button);
    }
  };

  it('should call the Scoreboard with players', () => {
    render(<App />);

    expect(screen.getByText('Player 1')).toBeInTheDocument();
    expect(screen.getByText('Player 2')).toBeInTheDocument();
  });

  it('should increment the score of player 1', () => {
    render(<App />);
    // before the click
    expect(screen.queryByText('15')).not.toBeInTheDocument();

    const player1Button = screen.getByText('Player1 +');
    clickMultipleTimes(player1Button, 1);

    expect(screen.getByText('15')).toBeInTheDocument();
  });

  it('should increment the score of player 2', () => {
    render(<App />);
    // before the click
    expect(screen.queryByText('15')).not.toBeInTheDocument();

    const player2Button = screen.getByText('Player2 +');
    clickMultipleTimes(player2Button, 1);

    expect(screen.getByText('15')).toBeInTheDocument();

    clickMultipleTimes(player2Button, 1);

    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('should show the DEUCE text', () => {
    render(<App />);

    const player1Button = screen.getByText('Player1 +');
    const player2Button = screen.getByText('Player2 +');

    // each player should score to 40
    clickMultipleTimes(player1Button, 3);
    clickMultipleTimes(player2Button, 3);

    const deuceText = screen.getAllByText('DEUCE');
    expect(deuceText.length).toBe(2);
  });

  it('should show the ADV text', () => {
    render(<App />);

    const player1Button = screen.getByText('Player1 +');
    const player2Button = screen.getByText('Player2 +');

    // each player should score to 40
    clickMultipleTimes(player1Button, 3);
    clickMultipleTimes(player2Button, 3);

    // player 1 should score again
    clickMultipleTimes(player1Button, 1);

    const advText = screen.getAllByText('ADV');
    expect(advText.length).toBe(1);
  });

  it('should reset the match', () => {
    render(<App />);

    const player2Button = screen.getByText('Player2 +');
    // click 4 times
    clickMultipleTimes(player2Button, 4);

    expect(screen.getByText('WINNER')).toBeInTheDocument();
    expect(screen.getByText('NEW MATCH')).toBeInTheDocument();

    userEvent.click(screen.getByText('NEW MATCH'));

    // after the reset
    const loveElements = screen.getAllByText('LOVE');
    expect(loveElements.length).toBe(2);

    expect(screen.queryByText('NEW MATCH')).not.toBeInTheDocument();
  });
});
