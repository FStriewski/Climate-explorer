import * as React from 'react';
const { useState } = React;

import Dropdown from '../../lib/DropDown';
import { Button } from '../../styles/Button';
import {
  DropdownList as StyledDropdownList,
  DropdownListItem
} from '../../styles/Dropdown';

export type Value = {
  iso: string;
};

export interface ICountry extends Value {
  label: string;
}

const DEFAULT: ICountry = {
  label: 'select Country',
  iso: ''
};

const COUNTRY_VALUES: ICountry[] = [
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

const getIso = (iso: string) => {
  const target = COUNTRY_VALUES.find(item => item.iso === iso) || DEFAULT;
  return target.label;
};

export const Countries = () => {
  const [iso, setIso] = useState('');

  return (
    <Dropdown
      autoClose={true}
      handler={onToggle => <Button onClick={onToggle}>{getIso(iso)}</Button>}
    >
      <StyledDropdownList>
        {COUNTRY_VALUES.map((item, index) => (
          <DropdownListItem key={index} onClick={() => setIso(item.iso)}>
            {item.label}
          </DropdownListItem>
        ))}
      </StyledDropdownList>
    </Dropdown>
  );
};
