import * as React from 'react';
import { SideBar as StyledSideBar } from '../../styles/SideBar';
import { SideBarHeader } from './Header';
import { Country } from './Country';
import { Indicator } from './Indicator';
import QueryState from '../../data/QueryState';

/* tslint:disable: jsx-no-lambda */
const SideBar = () => (
  <QueryState>
    {({ setQueryParam }) => (
      <StyledSideBar>
        <SideBarHeader />
        <span>Select Country (Dropdown)</span>
        <Country setQuery={setQueryParam}/>
        <span>Select Year (Input)</span>
        <span>Select T/P/TP(Dropdown)</span>
        <Indicator setQuery={setQueryParam}/>
      </StyledSideBar>
    )}
  </QueryState>
);

export default SideBar;
