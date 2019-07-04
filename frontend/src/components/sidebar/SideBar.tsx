import * as React from 'react';
import { SideBar as StyledSideBar } from '../../styles/SideBar';
import { Button } from '../../styles/Button';
import { SideBarHeader } from './Header';
import ModeSetting, { ModeState } from 'src/data/Mode';
import { Mode } from '../../types';

  /* tslint:disable: jsx-no-lambda */
const SideBar = () => (
  <ModeSetting>
    {({ mode, updateMode }) => (
      <StyledSideBar>
        <SideBarHeader />
        <Button onClick={() => updateMode(Mode.EDIT)}>Edit</Button>
        <Button onClick={() => updateMode(Mode.DRAG)}>Drag</Button>
      </StyledSideBar>
    )}
  </ModeSetting>
);

export default SideBar;
