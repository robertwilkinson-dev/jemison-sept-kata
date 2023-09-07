import React, { type FC } from 'react';
import styles from './Button.module.css';

export interface IButtonProps {
  onClick: () => void;
  text: string;
}

export const Button: FC<IButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
