export interface ICountry {
  label: string;
  iso: string;
}

export const COUNTRIES: ICountry[] = [
  {
    label: 'Antarctica',
    iso: 'ATA'
  },
  {
    label: 'Australia',
    iso: 'AUS'
  },
  {
    label: 'Brazil',
    iso: 'BRA'
  },
  {
    label: 'Canada',
    iso: 'CAN'
  },
  {
    label: 'Finland',
    iso: 'FIN'
  },
  {
    label: 'France',
    iso: 'FRA'
  },
  {
    label: 'Germany',
    iso: 'DEU'
  },
  {
    label: 'Greenland',
    iso: 'GRE'
  },
  {
    label: 'India',
    iso: 'IND'
  },
  {
    label: 'Japan',
    iso: 'JPN'
  },
  {
    label: 'Kenya',
    iso: 'KEN'
  },
  {
    label: 'Netherlands',
    iso: 'NLD'
  },
  {
    label: 'Peru',
    iso: 'PER'
  },
  {
    label: 'Russia',
    iso: 'RUS'
  },
  {
    label: 'USA',
    iso: 'USA'
  }
];

export interface IMonth {
  label: string;
  mon: number;
}

export const MONTHS = [
  {
    label: 'Januar',
    mon: 1
  },
  {
    label: 'February',
    mon: 2
  },
  {
    label: 'March',
    mon: 3
  },
  {
    label: 'April',
    mon: 4
  },
  {
    label: 'May',
    mon: 5
  },
  {
    label: 'June',
    mon: 6
  },
  {
    label: 'July',
    mon: 7
  },
  {
    label: 'August',
    mon: 8
  },
  {
    label: 'Septembter',
    mon: 9
  },
  {
    label: 'October',
    mon: 10
  },
  {
    label: 'November',
    mon: 11
  },
  {
    label: 'December',
    mon: 12
  }
];

export interface IIndicator {
  label: string;
  ind: string;
}

export const INDICATORS: IIndicator[] = [
  {
    label: 'Temperature',
    ind: 'tas'
  },
  {
    label: 'Precepitation',
    ind: 'pr'
  },
  {
    label: 'Combined',
    ind: 'taspr'
  }
];
