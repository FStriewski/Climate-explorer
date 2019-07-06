import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';


export const Button = styled.button`
  display: inline-block;

  transition: background 0.2s;

  height: 20px;
  line-height: 1;
  min-width: 25px;
  max-width: 200px;
  border-radius: 5px;
  border: none;
  outline: none;

  background: transparent;
  cursor: pointer;

    padding: 0 16px;
  box-shadow: none;
  text-align: center;
  white-space: nowrap;
  background-color: ${SCHEMA_1.COLOR_3};
  color: ${COMMON.COLOR_1};
  margin: 10px;

  &:hover {
    color: green;
  }
`;
