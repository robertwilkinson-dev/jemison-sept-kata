import React, { type FC } from 'react';
import { IPlayer } from '../../interfaces/IPlayer';
import styles from './Scoreboard.module.css';
import { IScoreboard } from '../../interfaces';

export const Scoreboard: FC<IScoreboard> = ({
  name,
  score,
  isDeuce,
  hasAdvantage,
  hasWon,
}) => {
  const boardScore =
    score === 0 ? 'LOVE' : score === 1 ? '15' : score === 2 ? '30' : '40';

  return (
    <ul className={styles.scoreboardContainer}>
      <li>{name}</li>
      <li>{`${
        hasWon
          ? 'WINNER'
          : isDeuce
          ? 'DEUCE'
          : hasAdvantage
          ? 'ADVANTAGE'
          : boardScore
      }`}</li>
    </ul>
  );
};
