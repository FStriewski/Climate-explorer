import * as React from 'react';
import { IHeader, IParagraph, IPartialNode, Position } from 'src/types';
import Survey from '../../data/SurveyState';
import { DraggableHOC, DragState } from '../../lib/DraggableHOC';
import { SelectionStateProvider } from '../../lib/Selection';
import { MainStage as StyledMainStage } from '../../styles/MainStage';
import { Col1 } from './Columns';
import { Node } from './Element';

interface IRenderProps {
  nodes: IPartialNode[];
}

const MainStage = () => (
  <Survey>
    {({ nodes }: IRenderProps) => (
      <DraggableHOC>
        <SelectionStateProvider>
          <StyledMainStage>
            <Col1>
              {nodes ? (
                nodes.map(node => <Node key={node.id} node={node} />)
              ) : (
                <div />
              )}
              }
            </Col1>
          </StyledMainStage>
        </SelectionStateProvider>
      </DraggableHOC>
    )}
  </Survey>
);

export default MainStage;
