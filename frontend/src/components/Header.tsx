import * as React from 'react';
import { Header as StyledHeader } from '../styles/Header';
import { Button } from 'src/styles/Button';

const Header = ({ print }) => (
    <StyledHeader>
      <Button onClick={print}>Print</Button>
    </StyledHeader>
);

export default Header;
