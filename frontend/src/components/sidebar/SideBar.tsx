import * as React from 'react';
import { SideBar as StyledSideBar, Box } from '../../styles/SideBar';

import QueryState from '../../data/QueryState';
import { QueryButton } from '../../styles/Button';
import { Mode } from './Dropdowns/Mode';
import { getYear, getMonthTimeSeries, getTimeSeries } from '../../data/Queries';

import { IState } from '../../lib/types';

import {
  toolgroupYear,
  toolgroupMonthTS,
  toolgroupFullTS
} from '../sidebar/Toolgroups';

const generateId = () => Math.floor(Math.random() * Math.random() * 100000);

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

const makeCall = async (state, addRecord, flushState) => {
  switch (state.tool) {
    case 'Year':
      const yearData = await getYear(state);
      addRecord({
        id: generateId(),
        data: yearData,
        color: state.indicator,
        description: `Selected year, avg of ${state.indicator} for ${
          state.isoCountry
        }`
      });
      flushState();
      return;
    case 'MonthTS':
      const monthData = await getMonthTimeSeries(state);
      addRecord({
        id: generateId(),
        data: monthData,
        color: state.indicator,
        description: `Selected month, avg of ${state.indicator} for ${
          state.isoCountry
        }`
      });
      flushState();

      return;
    case 'FullTS':
      const tsData = await getTimeSeries(state);
      console.log(tsData);
      addRecord({
        id: generateId(),
        data: tsData,
        description: `Yearly avg of ${state.indicator} for ${state.isoCountry}`,
        color: state.indicator
      });
      flushState();

      return;
  }
};

const SideBar = () => (
  <QueryState>
    {({
      setQueryParam,
      lockedQuery,
      setTool,
      addRecord,
      state,
      flushState
    }) => (
      <StyledSideBar>
        <Box>
          <Mode setTool={setTool} />
        </Box>
        {renderToolgroup(state.tool, setQueryParam)}
        <Box>
          <QueryButton
            onClick={() => makeCall(state, addRecord, flushState)}
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
