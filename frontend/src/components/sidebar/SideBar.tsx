import * as React from 'react';
import { SideBar as StyledSideBar, Box } from '../../styles/SideBar';

import QueryState from '../../data/QueryState';
import { QueryButton } from '../../styles/Button';
import { Mode } from './Dropdowns/Mode';
import { getYear, getMonthTimeSeries, getTimeSeries } from '../../data/Queries';

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

const makeCall = async (state, addRecord) => {
  switch (state.tool) {
    case 'Year':
      const yearData = await getYear(state);
      addRecord({
        id: 'xx',
        data: yearData,
        description: 'Single Year'
      });
      return;
    case 'MonthTS':
      const monthData = await getMonthTimeSeries(state);
      addRecord({
        id: 'xx',
        data: monthData,
        description: 'Month TS'
      });
      return;
    case 'FullTS':
      const tsData = await getTimeSeries(state);
      addRecord({
        id: 'xx',
        data: tsData,
        description: 'Full TS'
      });

      return;
  }
};

const SideBar = () => (
  <QueryState>
    {({ setQueryParam, lockedQuery, setTool, addRecord, state }) => (
      <StyledSideBar>
        <Box>
          <Mode setTool={setTool} />
        </Box>
        {renderToolgroup(state.tool, setQueryParam)}
        <Box>
          <QueryButton
            onClick={() => makeCall(state, addRecord)}
            disabled={lockedQuery()}
          >
            Query
          </QueryButton>
        </Box>
      </StyledSideBar>
    )}
  </QueryState>
);

export default SideBar;
