import React from 'react';
import styles from './App.module.css';
import { IPlayer } from './interfaces/IPlayer';
import { Scoreboard } from './components';

function App() {
  const player1: IPlayer = {
    name: 'Player 1',
    score: 0,
  };
  const player2: IPlayer = {
    name: 'Player 2',
    score: 0,
  };
  const [players, setPlayers] = React.useState([player1, player2]);

  const increasePlayer1Score = () => {
    setPlayers((prevPlayers) => {
      const [player1, player2] = prevPlayers;
      return [{ ...player1, score: player1.score++ }, player2];
    });
  };

  const increasePlayer2Score = () => {
    setPlayers((prevPlayers) => {
      const [player1, player2] = prevPlayers;
      return [player1, { ...player2, score: player2.score++ }];
    });
  };

  return (
    <section className={styles.scoreboardContainer}>
      <ul className={styles.labelContainer}>
        <li>Player</li>
        <li>Game Score</li>
      </ul>

      <Scoreboard {...players[0]} />
      <Scoreboard {...players[1]} />

      <div>
        <button onClick={increasePlayer1Score}>Player1 +</button>
        <button onClick={increasePlayer2Score}>Player2 +</button>
      </div>
    </section>
  );
}

export default App;
