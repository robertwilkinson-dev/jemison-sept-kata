import { IPlayer } from '../../interfaces';

export const initialPlayers: IPlayer[] = [
  {
    name: 'Player 1',
    score: 0,
  },
  {
    name: 'Player 2',
    score: 0,
  },
];

export const hasPlayer1Advantage = (players: IPlayer[]) => {
  const [player1, player2] = players;
  return player1.score >= 4 && player1.score - player2.score === 1;
};

export const hasPlayer2Advantage = (players: IPlayer[]) => {
  const [player1, player2] = players;
  return player2.score >= 4 && player2.score - player1.score === 1;
};

export const hasPlayer1Won = (players: IPlayer[]) => {
  const [player1, player2] = players;

  return player1.score >= 4 && player1.score - player2.score >= 2;
};

export const hasPlayer2Won = (players: IPlayer[]) => {
  const [player1, player2] = players;

  return player2.score >= 4 && player2.score - player1.score >= 2;
};

export const isGameDeuce = (players: IPlayer[]) => {
  const [player1, player2] = players;

  return (
    player1.score >= 3 && player2.score >= 3 && player1.score === player2.score
  );
};

export const increasePlayerScore = (players: IPlayer[], playerIndex: number) =>
  players.map((player, index) =>
    index === playerIndex ? { ...player, score: player.score + 1 } : player
  );
