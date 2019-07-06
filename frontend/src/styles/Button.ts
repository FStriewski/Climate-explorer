import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';

export const Button = styled.button`
  display: inline-block;

  transition: background 0.2s;

  height: 25px;
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
`;

export const QueryButton = styled<{ disabled?: boolean }, 'button'>('button')`
  display: inline-block;

  transition: background 0.2s;

  height: 25px;
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
  background-color: ${props => (props.disabled ? '#ff0000' : SCHEMA_1.COLOR_3)};
  
  color: ${COMMON.COLOR_1};
  margin: 10px;
`;

export const InputButton = styled.button`
  display: inline-block;
  transition: background 0.2s;
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
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  height: 25px;
  width: 50px;
  border: 1px solid transparent;
  border-radius: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
