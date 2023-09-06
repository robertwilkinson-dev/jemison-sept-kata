import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { IPlayer } from './interfaces/IPlayer';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));
const mockSetState = jest.fn();

const mockPlayer1: IPlayer = {
  name: 'Mock Player 1',
  score: 0,
};
const mockPlayer2: IPlayer = {
  name: 'Mock Player 2',
  score: 0,
};

describe('App', () => {
  it('should call the Scoreboard with players', () => {
    (useState as jest.Mock).mockReturnValueOnce([
      [mockPlayer1, mockPlayer2],
      mockSetState,
    ]);

    render(<App />);

    expect(screen.getByText(mockPlayer1.name)).toBeInTheDocument();
    expect(screen.getByText(mockPlayer2.name)).toBeInTheDocument();
  });

  it('should increment the score of player 1', () => {
    (useState as jest.Mock)
      .mockReturnValue([[mockPlayer1, mockPlayer2], mockSetState])
      .mockReturnValueOnce([
        [{ ...mockPlayer1, score: 1 }, mockPlayer2],
        mockSetState,
      ]);

    render(<App />);

    userEvent.click(screen.getByText('Player1 +'));

    expect(screen.getByText('15')).toBeInTheDocument();
  });

  it('should increment the score of player 2', () => {
    (useState as jest.Mock)
      .mockReturnValue([[mockPlayer1, mockPlayer2], mockSetState])
      .mockReturnValueOnce([
        [mockPlayer1, { ...mockPlayer2, score: 1 }],
        mockSetState,
      ]);

    render(<App />);

    userEvent.click(screen.getByText('Player2 +'));

    expect(screen.getByText('15')).toBeInTheDocument();
  });
});
