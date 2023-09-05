import React, { type FC } from 'react';
import { IPlayer } from '../../interfaces/IPlayer';

export const Scoreboard: FC<IPlayer> = ({ name, score }) => {
  return (
    <ul>
      <li>{name}</li>
      <li>{score}</li>
    </ul>
  );
};
