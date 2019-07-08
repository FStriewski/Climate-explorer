import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';

export const Header = styled.div`
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
  border: 1px solid ${SCHEMA_1.COLOR_2};
  background-color: ${SCHEMA_1.COLOR_1};
  color: white;

  align-items: center;
  display: flex;
  flex-shrink: 0;
  height: 40px;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  user-select: none;
`;
