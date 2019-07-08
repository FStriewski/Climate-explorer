import * as React from 'react';
import { SideBar as StyledSideBar, Box } from '../../styles/SideBar';
import { SideBarHeader } from './Header';
import { Country } from './Dropdowns/Country';
import { Indicator } from './Dropdowns/Indicator';
import { Year } from './Year';
import { Month } from './Dropdowns/Month';

export const toolgroupYear = ( setQueryParam ) => (
  <React.Fragment>
    <Box>
      <Country setQuery={setQueryParam} />
    </Box>
    <Box>
      <Year setQuery={setQueryParam} />
    </Box>
    <Box>
      <Indicator setQuery={setQueryParam} />
    </Box>
  </React.Fragment>
);

export const toolgroupMonthTS = (setQueryParam ) => (
  <React.Fragment>
    <Box>
      <Country setQuery={setQueryParam} />
    </Box>
    <Box>
      <Month setQuery={setQueryParam} />
    </Box>
    <Box>
      <Indicator setQuery={setQueryParam} />
    </Box>
  </React.Fragment>
);

export const toolgroupFullTS = (setQueryParam ) => (
  <React.Fragment>
    <Box>
      <Country setQuery={setQueryParam} />
    </Box>
    <Box>
      <Indicator setQuery={setQueryParam} />
    </Box>
  </React.Fragment>
);
