import React, { type FC } from 'react';
import styles from './Button.module.css';
import { IButtonProps } from '../../interfaces';

export const Button: FC<IButtonProps> = ({
  text,
  onClick,
  styleClass = '',
}) => {
  return (
    <button
      className={`${styles.button} ${styles[styleClass]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
