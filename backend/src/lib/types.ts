export type TSArrayInput = {
  type: 'mavg' | 'annualavg';
  indicator: 'pr' | 'tas';
  iso: string;
}

export type APIresponse = {
  fromYear: number;
  toYear: number;
  gcm: string;
  variable: string;
  monthVals?: number[];
  annualData?: number[];
};

export type RecordSet = [number, number[]]

export enum Parameter {
  ANNUAL = 'annualData',
  MONTH = 'monthVals'
}