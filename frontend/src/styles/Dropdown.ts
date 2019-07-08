import styled from './styled-components';
import { COMMON, SCHEMA_1 } from './variables';
import { Button } from './Button';

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownContent = styled.div`
  position: absolute;
  min-width: 150px;
  background-color: ${COMMON.COLOR_1};
  box-shadow: 0 1px 8px 0 ${SCHEMA_1.COLOR_3};
  border-radius: 5px;
  background-clip: padding-box;
  z-index: 50;
`;

export const Zooming = styled.div`
  margin-left: auto;
  width: 80px;
  display: flex;
  align-items: center;
  position: relative;

  ${Button} {
    z-index: 1;
    position: relative;
  }

  ${Dropdown} {
    position: absolute;
    left: 0;
    right: 0;

    ${Button} {
      color: ${SCHEMA_1.COLOR_1};
    }
  }
`;

export const DropdownListItem = styled.li<{ enabled?: boolean }>`
  padding: 0 16px;
  margin: 0;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  color: ${COMMON.COLOR_2};
  z-index: 50;
  overflow: visible;

  &:hover {
    background-color: ${SCHEMA_1.COLOR_1};
    cursor: pointer;
    color: ${SCHEMA_1.COLOR_1};
  }
  list-style: none;
`;

export const DropdownList = styled.ul`
  list-style: none;
  padding: 8px 0;
  margin: 0;
  z-index: 50;
  overflow: visible;
`;
