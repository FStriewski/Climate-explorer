import * as React from 'react';
const { useState } = React;

import Dropdown from '../../../lib/DropDown';
import { Button } from '../../../styles/Button';
import {
  DropdownList as StyledDropdownList,
  DropdownListItem
} from '../../../styles/Dropdown';

import { ICountry, COUNTRIES } from '../../../data/Parameters';

const DEFAULT: ICountry = {
  label: 'select Country',
  iso: ''
};

const getIso = (iso: string) => {
  const target = COUNTRIES.find(item => item.iso === iso) || DEFAULT;
  return target.label;
};

export const Country = ({ setQuery }) => {
  const [iso, setIso] = useState('');
  const setIsoValue = (item: ICountry) => {
    setIso(item.iso);

    console.log(setQuery);
    const isoCountry = item.iso;
    setQuery({
      type: 'isoCountry',
      payload: isoCountry
    });
  };

  return (
    <Dropdown
      autoClose={true}
      handler={onToggle => <Button onClick={onToggle}>{getIso(iso)}</Button>}
    >
      <StyledDropdownList>
        {COUNTRIES.map((item, index) => (
          <DropdownListItem key={index} onClick={() => setIsoValue(item)}>
            {item.label}
          </DropdownListItem>
        ))}
      </StyledDropdownList>
    </Dropdown>
  );
};
