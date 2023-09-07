import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { IPlayer } from './interfaces';

describe('App', () => {
  it('should call the Scoreboard with players', () => {
    // (useState as jest.Mock).mockReturnValueOnce([
    //   [mockPlayer1, mockPlayer2],
    //   mockSetState,
    // ]);

    render(<App />);
    expect(screen.getByText('Player 1')).toBeInTheDocument();
    expect(screen.getByText('Player 2')).toBeInTheDocument();

    // expect(screen.getByText(mockPlayer1.name)).toBeInTheDocument();
    // expect(screen.getByText(mockPlayer2.name)).toBeInTheDocument();
  });

  it('should increment the score of player 1', () => {
    render(<App />);
    // before the click
    expect(screen.queryByText('15')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Player1 +'));

    expect(screen.getByText('15')).toBeInTheDocument();
  });

  it('should increment the score of player 2', () => {
    render(<App />);
    // before the click
    expect(screen.queryByText('15')).not.toBeInTheDocument();

    const player2Button = screen.getByText('Player2 +');
    userEvent.click(player2Button);

    expect(screen.getByText('15')).toBeInTheDocument();

    userEvent.click(player2Button);

    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('should reset the match', () => {
    render(<App />);

    const player2Button = screen.getByText('Player2 +');
    // click 4 times
    userEvent.click(player2Button);
    userEvent.click(player2Button);
    userEvent.click(player2Button);
    userEvent.click(player2Button);

    expect(screen.getByText('WINNER')).toBeInTheDocument();
    expect(screen.getByText('NEW MATCH')).toBeInTheDocument();

    userEvent.click(screen.getByText('NEW MATCH'));

    // after the reset
    const loveElements = screen.getAllByText('LOVE');
    expect(loveElements.length).toBe(2);

    expect(screen.queryByText('NEW MATCH')).not.toBeInTheDocument();
  });
});
