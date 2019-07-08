import * as React from 'react';
const { useState } = React;

import Dropdown from '../../../lib/DropDown';
import { Button } from '../../../styles/Button';
import {
  DropdownList as StyledDropdownList,
  DropdownListItem
} from '../../../styles/Dropdown';

import { IIndicator, INDICATORS } from '../../../data/Parameters';

const DEFAULT: IIndicator = {
  label: 'select Indicator',
  ind: ''
};

const getInd = (ind: string) => {
  const target = INDICATORS.find(item => item.ind === ind) || DEFAULT;
  return target.label;
};

export const Indicator = ({ setQuery }) => {
  const [ind, setInd] = useState('');
  const setIndicator = (item: IIndicator) => {
    setInd(item.ind);

    const indicator = item.ind;
    setQuery({
      type: 'indicator',
      payload: indicator
    });
  };

  return (
    <Dropdown
      autoClose={true}
      handler={onToggle => <Button onClick={onToggle}>{getInd(ind)}</Button>}
    >
      <StyledDropdownList>
        {INDICATORS.map((item, index) => (
          <DropdownListItem key={index} onClick={() => setIndicator(item)}>
            {item.label}
          </DropdownListItem>
        ))}
      </StyledDropdownList>
    </Dropdown>
  );
};
