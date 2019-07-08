import * as React from 'react';
const { useState } = React;

import Dropdown from '../../../lib/DropDown';
import { Button } from '../../../styles/Button';
import {
  DropdownList as StyledDropdownList,
  DropdownListItem
} from '../../../styles/Dropdown';

import { IMode, MODE } from '../../../data/Parameters';

const DEFAULT: IMode = {
  label: 'select Mode',
  mode: '',
};

const getMode = (mode: string) => {
  const target = MODE.find(item => item.mode === mode) || DEFAULT;
  return target.label;
};

export const Mode = props => {
  const [mode, setMode] = useState('');
  const updateMode = (item: IMode) => {
    setMode(item.mode);
    props.setTool(item.mode)
  };

  return (
    <Dropdown
      autoClose={true}
      handler={onToggle => <Button onClick={onToggle}>{getMode(mode)}</Button>}
    >
      <StyledDropdownList>
        {MODE.map((item, index) => (
          <DropdownListItem key={index} onClick={() => updateMode(item)}>
            {item.label}
          </DropdownListItem>
        ))}
      </StyledDropdownList>
    </Dropdown>
  );
};
