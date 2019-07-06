import * as React from 'react';
import { SideBar as StyledSideBar } from '../../styles/SideBar';
import { Button } from '../../styles/Button';
import { SideBarHeader } from './Header';
import ModeSetting, { ModeState } from 'src/data/Mode';
import { Mode } from '../../types';
import { Countries } from './Countries';

/* tslint:disable: jsx-no-lambda */
const SideBar = () => (
  <ModeSetting>
    {({ mode, updateMode }) => (
      <StyledSideBar>
        <SideBarHeader />
        <span>Select Country (Dropdown)</span>
        <Countries/>
        <span>Select Year (Input)</span>
        <span>Select T/P/TP(Dropdown)</span>
      </StyledSideBar>
    )}
  </ModeSetting>
);

export default SideBar;
