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

  const isDeuce =
    players[0].score >= 3 && players[0].score === players[1].score;

  const [hasPlayerWon, setHasPlayerWon] = React.useState({
    player1: false,
    player2: false,
  });

  const [hasPlayerAdvantage, setHasPlayerAdvantage] = React.useState({
    player1: false,
    player2: false,
  });

  React.useEffect(() => {
    if (players[0].score >= 4 && players[0].score - players[1].score === 1) {
      setHasPlayerAdvantage((prev) => ({ player2: false, player1: true }));
    }
    if (players[1].score >= 4 && players[1].score - players[0].score === 1) {
      setHasPlayerAdvantage((prev) => ({ player1: false, player2: true }));
    }
  }, [players]);

  React.useEffect(() => {
    if (players[0].score >= 4 && players[0].score - players[1].score >= 2) {
      setHasPlayerWon((prev) => ({ ...prev, player1: true }));
    }
    if (players[1].score >= 4 && players[1].score - players[0].score >= 2) {
      setHasPlayerWon((prev) => ({ ...prev, player2: true }));
    }
  }, [players]);

  const increasePlayer1Score = () => {
    setPlayers((prevPlayers) => {
      const [player1, player2] = prevPlayers;
      return [{ ...player1, score: player1.score + 1 }, player2];
    });
  };

  const increasePlayer2Score = () => {
    setPlayers((prevPlayers) => {
      const [player1, player2] = prevPlayers;
      return [player1, { ...player2, score: player2.score + 1 }];
    });
  };

  const resetTheMatch = () => {
    setPlayers([player1, player2]);
    setHasPlayerWon({ player1: false, player2: false });
    setHasPlayerAdvantage({ player1: false, player2: false });
  };

  return (
    <section className={styles.scoreboardContainer}>
      <ul className={styles.labelContainer}>
        <li>Player</li>
        <li>Game Score</li>
      </ul>

      <Scoreboard
        {...players[0]}
        isDeuce={isDeuce}
        hasAdvantage={hasPlayerAdvantage.player1}
        hasWon={hasPlayerWon.player1}
      />
      <Scoreboard
        {...players[1]}
        isDeuce={isDeuce}
        hasAdvantage={hasPlayerAdvantage.player2}
        hasWon={hasPlayerWon.player2}
      />

      <div>
        {hasPlayerWon.player1 || hasPlayerWon.player2 ? (
          <button onClick={resetTheMatch}>NEW MATCH </button>
        ) : (
          <>
            <button onClick={increasePlayer1Score}>Player1 +</button>
            <button onClick={increasePlayer2Score}>Player2 +</button>
          </>
        )}
      </div>
    </section>
  );
}

export default App;
