import * as React from 'react';
import { SideBar as StyledSideBar, Box, Toolgroup } from '../../styles/SideBar';
import { Country } from './Dropdowns/Country';
import { Indicator } from './Dropdowns/Indicator';
import { Year } from './Year';
import { Month } from './Dropdowns/Month';

export const toolgroupYear = ( setQueryParam ) => (
  <Toolgroup>
    <Box>
      <Country setQuery={setQueryParam} />
    </Box>
    <Box>
      <Year setQuery={setQueryParam} />
    </Box>
    <Box>
      <Indicator setQuery={setQueryParam} />
    </Box>
  </Toolgroup>
);

export const toolgroupMonthTS = (setQueryParam ) => (
  <Toolgroup>
    <Box>
      <Country setQuery={setQueryParam} />
    </Box>
    <Box>
      <Month setQuery={setQueryParam} />
    </Box>
    <Box>
      <Indicator setQuery={setQueryParam} />
    </Box>
  </Toolgroup>
);

export const toolgroupFullTS = (setQueryParam ) => (
  <Toolgroup>
    <Box>
      <Country setQuery={setQueryParam} />
    </Box>
    <Box>
      <Indicator setQuery={setQueryParam} />
    </Box>
  </Toolgroup>
);
