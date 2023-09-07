import React, { type FC } from 'react';
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

  const formattedBoardText = hasWon
    ? 'WINNER'
    : isDeuce
    ? 'DEUCE'
    : hasAdvantage
    ? 'ADV'
    : boardScore;

  return (
    <ul
      className={`${styles.scoreboardContainer} ${hasWon ? styles.winner : ''}`}
    >
      <li>{name}</li>
      <li>{formattedBoardText}</li>
    </ul>
  );
};
