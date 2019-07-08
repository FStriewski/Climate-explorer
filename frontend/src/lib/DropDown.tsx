import * as React from 'react';
const { useState } = React;
import OutsideClickHandler from 'react-outside-click-handler';

import {
  Dropdown as StyledDropdown,
  DropdownContent
} from '../styles/Dropdown';

interface IProps {
  children: React.ReactNode;
  handler: (onToggle: () => void, status: boolean) => React.ReactNode;
  autoClose?: boolean;
}

const Menu = (props) => {
  const [menuVisible, setMenu] = useState(false);

  const toggleMenu = (state: boolean) => setMenu(state);

  return props.children({
    menuVisible,
    toggleMenu,
  });
};

export const Dropdown = ({ children, handler, autoClose }: IProps) => (
  <Menu>
    {({ menuVisible, toggleMenu }) => (
      <StyledDropdown>
        <OutsideClickHandler onOutsideClick={() => toggleMenu(false)}>
          <React.Fragment>
            {menuVisible
              ? handler(toggleMenu, true)
              : handler(toggleMenu, false)}
            {menuVisible &&
              (autoClose ? (
                <DropdownContent onClick={() => toggleMenu(false)}>
                  {children}
                </DropdownContent>
              ) : (
                <DropdownContent onClick={null}>{children}</DropdownContent>
              ))}
          </React.Fragment>
        </OutsideClickHandler>
      </StyledDropdown>
    )}
  </Menu>
);

export default Dropdown;
