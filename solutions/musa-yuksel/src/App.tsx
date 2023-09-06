import React from 'react';
import styles from './App.module.css';
import { Scoreboard } from './components';
import {
  hasPlayer1Advantage,
  hasPlayer1Won,
  hasPlayer2Advantage,
  hasPlayer2Won,
  increasePlayerScore,
  initialPlayers,
  isGameDeuce,
} from './utils';

function App() {
  const [players, setPlayers] = React.useState(initialPlayers);

  const [hasPlayerWon, setHasPlayerWon] = React.useState({
    player1: false,
    player2: false,
  });

  const [hasPlayerAdvantage, setHasPlayerAdvantage] = React.useState({
    player1: false,
    player2: false,
  });

  const [isDeuce, setIsDeuce] = React.useState(false);

  React.useEffect(() => {
    setIsDeuce(isGameDeuce(players));
  }, [players]);

  React.useEffect(() => {
    setHasPlayerAdvantage({
      player1: hasPlayer1Advantage(players),
      player2: hasPlayer2Advantage(players),
    });
  }, [players]);

  React.useEffect(() => {
    setHasPlayerWon({
      player1: hasPlayer1Won(players),
      player2: hasPlayer2Won(players),
    });
  }, [players]);

  const increasePlayer1Score = () => {
    const newScores = increasePlayerScore(players, 0);

    setPlayers(newScores);
  };

  const increasePlayer2Score = () => {
    const newScores = increasePlayerScore(players, 1);

    setPlayers(newScores);
  };

  const resetTheMatch = () => {
    setPlayers(initialPlayers);
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
