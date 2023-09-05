import React, { useState } from 'react';
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
  const [players, setPlayers] = useState([player1, player2]);
  return (
    <div className={styles.app}>
      <Scoreboard {...players[0]} />
      <Scoreboard {...players[1]} />
    </div>
  );
}

export default App;
