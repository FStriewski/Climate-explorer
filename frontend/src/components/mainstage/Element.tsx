import * as React from 'react';
import Draggable from 'react-draggable';
import SurveyState from 'src/data/SurveyState';
import ModeSetting from '../../data/Mode';
import { DragState } from '../../lib/DraggableHOC';
import SelectionState, { SelectionStateProvider } from '../../lib/Selection';
import { Element, Paragraph } from '../../styles/Element';
import { IParagraph, IPartialNode, Mode } from '../../types';
import { TextElement } from './TextElement';

const DraggableWrapper = props => (
  <SurveyState>
    {({ updatePosition }) => (
      <DragState>
        {({ dragHandlers, handleDrag, deltaPosition, setInitialPos }) => (
          <Draggable
            bounds="parent"
            grid={[20, 20]}
            onDrag={(e, ui) => {
              handleDrag(e, ui),
                updatePosition(props.id, deltaPosition),
                setInitialPos(deltaPosition.x, deltaPosition.y);
            }}
            {...dragHandlers}
          >
            {props.children}
          </Draggable>
        )}
      </DragState>
    )}
  </SurveyState>
);

interface IRNode {
  node: IPartialNode;
}

export const Node = ({node}: IRNode) => {
  return (
  <ModeSetting>
    {({ mode }) =>
      mode === Mode.DRAG ? (
        <DraggableWrapper id={node.id}>
          <Element className="box" {...node}/>
        </DraggableWrapper>
      ) : (
        <Element className="box" {...node}/>
      )
    }
  </ModeSetting>
)};
