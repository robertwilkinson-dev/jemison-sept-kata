import React, { type FC } from 'react';
export interface IPlayer {
  name: string;
  score: number;
}
export const Scoreboard: FC<IPlayer> = ({ name, score }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{score}</p>
    </div>
  );
};
