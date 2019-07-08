import * as React from 'react';
import { SideBar as StyledSideBar, Box } from '../../styles/SideBar';
import { SideBarHeader } from './Header';
import { Country } from './Dropdowns/Country';
import { Indicator } from './Dropdowns/Indicator';
import QueryState from '../../data/QueryState';
import { Year } from './Year';
import { QueryButton } from '../../styles/Button';
import { Mode } from './Dropdowns/Mode';

import {
  toolgroupYear,
  toolgroupMonthTS,
  toolgroupFullTS
} from '../sidebar/Toolgroups';

const renderToolgroup = ( tool, setQueryParam ) => {
  console.log(setQueryParam);
  switch (tool) {
    case 'Year':
      return toolgroupYear(setQueryParam);
    case 'MonthTS':
      return toolgroupMonthTS(setQueryParam);
    case 'FullTS':
      return toolgroupFullTS(setQueryParam);
    default:
      return;
  }
};

/* tslint:disable: jsx-no-lambda */
const SideBar = () => (
  <QueryState>
    {({ setQueryParam, lockedQuery, tool, setTool }) => (
      <StyledSideBar>
        <SideBarHeader>
          <Mode setTool={setTool} />
        </SideBarHeader>
        {renderToolgroup( tool, setQueryParam )}
        <Box>
          <QueryButton onClick={setQueryParam} disabled={lockedQuery()}>
            Query
          </QueryButton>
        </Box>
      </StyledSideBar>
    )}
  </QueryState>
);

export default SideBar;
