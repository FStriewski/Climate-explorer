import * as React from 'react';
const { useState } = React;

import Dropdown from '../../../lib/DropDown';
import { Button } from '../../../styles/Button';
import {
  DropdownList as StyledDropdownList,
  DropdownListItem
} from '../../../styles/Dropdown';

import { IMonth, MONTHS } from '../../../data/Parameters';

const DEFAULT: IMonth = {
  label: 'select Month',
  mon: 0
};

const getMonth = (month: number) => {
  const target = MONTHS.find(item => item.mon === month) || DEFAULT;
  return target.label;
};

export const Month = props => {
  const [mon, setMonth] = useState(0);
  const updateMonth = (item: IMonth) => {
    setMonth(item.mon);

    const month = item.mon;
    props.setQuery({
      type: 'month',
      payload: month
    });
  };

  return (
    <Dropdown
      autoClose={true}
      handler={onToggle => (
        <Button onClick={onToggle}>{getMonth(mon)}</Button>
      )}
    >
      <StyledDropdownList>
        {MONTHS.map((item, index) => (
          <DropdownListItem key={index} onClick={() => updateMonth(item)}>
            {item.label}
          </DropdownListItem>
        ))}
      </StyledDropdownList>
    </Dropdown>
  );
};
