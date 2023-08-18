import { IPlayerInit, IScoreName, possibleScores } from './player.types';

export class Player {
  name: string;
  score: number;

  constructor ({ name }: IPlayerInit) {
    this.name = name;
    this.score = 0;
  }

  addPoint = () => {
    this.score += 1;
  }

  overrideScore = (newScore: number) => {
    this.score = newScore;
  }

  get scoreName (): IScoreName {
    switch (this.score) {
      case 3:
        return possibleScores.forty;

      case 2:
        return possibleScores.thirty;

      case 1:;
        return possibleScores.fifteen;

      default:
        return possibleScores.love;
    } 
  }
};
