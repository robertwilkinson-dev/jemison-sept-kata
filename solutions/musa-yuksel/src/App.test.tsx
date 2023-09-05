import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { IPlayer } from './interfaces/IPlayer';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

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
      jest.fn(),
    ]);

    render(<App />);

    expect(screen.getByText(mockPlayer1.name)).toBeInTheDocument();
  });
});
