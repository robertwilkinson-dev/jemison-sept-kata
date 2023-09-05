import React, { type FC } from 'react';
import { IPlayer } from '../../interfaces/IPlayer';
import styles from './Scoreboard.module.css';

export const Scoreboard: FC<IPlayer> = ({ name, score }) => {
  return (
    <ul className={styles.scoreboardContainer}>
      <li>{name}</li>
      <li>{score}</li>
    </ul>
  );
};
