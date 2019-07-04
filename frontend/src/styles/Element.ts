import styled from './styled-components';
import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';

export const Element = styled<
  {
    x: number;
    y: number;
  },
  'div'
>('div')`
x:${props => props.x};
y:${props => props.y};
  width: 100%;
  height: 150px;
  background-color: white;
  border: 1px solid ${SCHEMA_1.COLOR_3};
  text-align: center;
  z-index: 10;
    position: relative;

`;

const setBorder = (selected: boolean) => {
  if (selected) {
    return '2px solid red';
  }
  return '1px solid grey';
};

export const Paragraph = styled<
  {
    selected: boolean;
  },
  'div'
>('div')`
  border: ${props => setBorder(props.selected)};
  padding: 5px;
    if (isSelected) {
    return COLOR.WHITE;
  }
       `;

export const TextElement = styled.div`
  /* fixes draft-js placeholder cursor position: */
  .public-DraftEditorPlaceholder-root {
    position: absolute;
    z-index: 0;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }

  /* fixes draft-js placeholder editing */
  .public-DraftEditor-content[contenteditable='true'] {
    -webkit-user-modify: read-write-plaintext-only;
  }

  .DraftEditor-editorContainer {
    background-color: rgba(255, 255, 255, 0);
    border-left: 0.1px solid transparent;
    position: relative;
    z-index: 1;
  }

  .public-DraftEditorPlaceholder-hasFocus {
    color: #bdc1c9;
  }
`;
