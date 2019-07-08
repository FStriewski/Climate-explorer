import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';

export const SideBar = styled.div`
  height: calc(100vh - 43px);
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  width: 150px;
  float: left;
  align-items: center;
  justify-items: center;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
  border: 1px solid ${SCHEMA_1.COLOR_2};
  background-color: ${SCHEMA_1.COLOR_1};
  color: white;
  border-top: none;
`;

export const Box = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${SCHEMA_1.COLOR_2};
  align-items: center;
  justify-items: center;
  margin: 0 auto;
  padding: 6px 0px;

  form {
    display: flex;
  }
`;

export const Toolgroup = styled.div`
  transition-timing-function: ease-in;
  transition: 2s;
`;
