import React, { type FC } from 'react';
import { IPlayer } from '../../interfaces/IPlayer';
import styles from './Scoreboard.module.css';

export const Scoreboard: FC<IPlayer> = ({ name, score }) => {
  const boardScore =
    score === 0 ? '0' : score === 1 ? '15' : score === 2 ? '30' : '40';

  return (
    <ul className={styles.scoreboardContainer}>
      <li>{name}</li>
      <li>{boardScore}</li>
    </ul>
  );
};
