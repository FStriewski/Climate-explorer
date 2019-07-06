import * as React from 'react';
import { SideBar as StyledSideBar, Box } from '../../styles/SideBar';
import { SideBarHeader } from './Header';
import { Country } from './Country';
import { Indicator } from './Indicator';
import QueryState from '../../data/QueryState';
import { Year } from './Year';
import { QueryButton } from '../../styles/Button';

/* tslint:disable: jsx-no-lambda */
const SideBar = () => (
  <QueryState>
    {({ setQueryParam, unlockQuery }) => (
      <StyledSideBar>
        <SideBarHeader />
        <Box>
          <Country setQuery={setQueryParam} />
        </Box>
        <Box>
          <Year setQuery={setQueryParam} />
        </Box>
        <Box>
          <Indicator setQuery={setQueryParam} />
        </Box>
        <Box>
          <QueryButton onClick={setQueryParam} disabled={unlockQuery()}>
            Query
          </QueryButton>
        </Box>
      </StyledSideBar>
    )}
  </QueryState>
);

export default SideBar;
