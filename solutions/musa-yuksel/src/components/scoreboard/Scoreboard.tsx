import React, { type FC } from 'react';
export interface IPlayer {
  name: string;
}
export const Scoreboard: FC<IPlayer> = ({ name }) => {
  return <div>{name}</div>;
};
