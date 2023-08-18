import { Player } from '../player';
import { IGameInit } from './game.types';

export class Game {
  private playerOne: Player;
  private playerTwo: Player;

  constructor({ playerOne, playerTwo }: IGameInit) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
  }

  isDeuce = (): boolean => {
    return this.playerOne.score >= 3
      && this.playerTwo.score === this.playerOne.score;
  }

  getLeader = (): Player => {
    if (this.playerOne.score > this.playerTwo.score) {
      return this.playerOne;
    }

    return this.playerTwo;
  }

  hasWinner = (): boolean => {
    if (this.playerOne.score >= 4 
      && this.playerOne.score >= this.playerTwo.score + 2
    ) return true;

    if (this.playerTwo.score >= 4 
      && this.playerTwo.score >= this.playerOne.score + 2
    ) return true;

    return false;
  }

  hasAdvantage = (): boolean => {
    if (this.playerOne.score >= 4
      && this.playerTwo.score == this.playerOne.score + 1
    ) return true;

    if (this.playerTwo.score >= 4
      && this.playerOne.score == this.playerTwo.score + 1
    ) return true;

    return false;
  }

  getScore = (): string => {
    if (this.hasWinner()) {
      const winner = this.getLeader();
      return `Winner: ${winner.name}`;
    }

    if (this.hasAdvantage()) {
      const leader = this.getLeader();
      return `Advantage: ${leader.name}`
    }

    if (this.isDeuce()) {
      return 'Deuce'
    }

    if (this.playerOne.score === this.playerTwo.score) {
      return `${this.playerOne.scoreName} all`
    }

    return `${this.playerOne.scoreName}, ${this.playerTwo.scoreName}`
  }
};
