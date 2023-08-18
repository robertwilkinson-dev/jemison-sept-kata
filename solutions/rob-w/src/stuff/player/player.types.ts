export type IPlayerInit = {
  name: string;
};


export const possibleScores = {
  love: 'Love',
  fifteen: 'Fifteen',
  thirty: 'Thirty',
  forty: 'Forty',
} as const;

export type IScoreName = (typeof possibleScores)[keyof typeof possibleScores];
