import React, { type FC } from 'react';

export interface IButtonProps {
  onClick: () => void;
  text: string;
}

export const Button: FC<IButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
