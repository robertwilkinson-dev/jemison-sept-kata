import { IPlayer } from './IPlayer';

export interface IScoreboard extends IPlayer {
  isDeuce: boolean;
  hasWon: boolean;
  hasAdvantage: boolean;
}
