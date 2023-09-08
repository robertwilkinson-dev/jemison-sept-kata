import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { Button, Scoreboard } from './components';
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
  const [players, setPlayers] = useState(initialPlayers);

  const [hasPlayerWon, setHasPlayerWon] = useState({
    player1: false,
    player2: false,
  });

  const [hasPlayerAdvantage, setHasPlayerAdvantage] = useState({
    player1: false,
    player2: false,
  });

  const [isDeuce, setIsDeuce] = useState(false);
  useEffect(() => {
    setIsDeuce(isGameDeuce(players));
  }, [players]);

  useEffect(() => {
    setHasPlayerAdvantage({
      player1: hasPlayer1Advantage(players),
      player2: hasPlayer2Advantage(players),
    });
  }, [players]);

  useEffect(() => {
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
    <section className={styles.appContainer}>
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

      {hasPlayerWon.player1 || hasPlayerWon.player2 ? (
        <Button
          styleClass="newMatchButton"
          text="NEW MATCH"
          onClick={resetTheMatch}
        />
      ) : (
        <>
          <Button text="Player1 +" onClick={increasePlayer1Score} />
          <Button text="Player2 +" onClick={increasePlayer2Score} />
        </>
      )}
    </section>
  );
}

export default App;
