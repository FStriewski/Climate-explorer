export type ID = string;

export enum Position {
  LEFT,
  RIGHT
}

export type Chart = {
  id: ID;
  data: any;
  description: string;
};

export interface IState {
  isoCountry: string;
  indicator: string;
  year: number;
  tool: 'Year' | 'MonthTS' | 'FullTS';
  month: string;
  charts: Chart[];
}
