export type ID = string;

export enum Position {
  LEFT,
  RIGHT
}
export enum Indicator {
  TEMP = 'tas',
  PREC = 'pr'
}

export type Chart = {
  id: ID;
  data: any;
  description: string;
  color: Indicator;
};

export interface IState {
  isoCountry: string;
  indicator: Indicator;
  year: number;
  tool: 'Year' | 'MonthTS' | 'FullTS';
  month: string;
  charts: Chart[];
}
