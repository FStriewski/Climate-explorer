import * as React from 'react';
import { SideBar as StyledSideBar, Box } from '../../styles/SideBar';

import QueryState from '../../data/QueryState';
import { QueryButton } from '../../styles/Button';
import { Mode } from './Dropdowns/Mode';

import {
  toolgroupYear,
  toolgroupMonthTS,
  toolgroupFullTS
} from '../sidebar/Toolgroups';

const renderToolgroup = (tool, setQueryParam) => {
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

const SideBar = () => (
  <QueryState>
    {({ setQueryParam, lockedQuery, tool, setTool }) => (
      <StyledSideBar>
        <Box>
          <Mode setTool={setTool} />
        </Box>
        {renderToolgroup(tool, setQueryParam)}
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
