import * as React from 'react';
import { IHeader, IParagraph, IPartialNode, Position } from 'src/types';
import Survey from '../../data/SurveyState';
import { DraggableHOC, DragState } from '../../lib/DraggableHOC';
import { SelectionStateProvider } from '../../lib/Selection';
import { MainStage as StyledMainStage } from '../../styles/MainStage';
import { Col1 } from './Columns';
import { Node } from './Element';
import { SingleLineChart } from 'src/test/LineChart';

interface IRenderProps {
  nodes: IPartialNode[];
}

const test = {
  '1': 1.781228202,
  '2': 1.128090995,
  '3': 2.222555978,
  '4': 5.432564872,
  '5': 9.921055385,
  '6': 13.3447004,
  '7': 14.68692017,
  '8': 14.01670619,
  '9': 12.27503749,
  '10': 8.981488909,
  '11': 5.703687395,
  '12': 2.79226248
};

const MainStage = () => (
  <Survey>
    {({ nodes }: IRenderProps) => (
      <DraggableHOC>
        <SelectionStateProvider>
          <StyledMainStage>
            <SingleLineChart data={test} />
            {/* <Col1>
              {nodes ? (
                nodes.map(node => <Node key={node.id} node={node} />)
              ) : (
                <div />
              )}
              }
            </Col1> */}
          </StyledMainStage>
        </SelectionStateProvider>
      </DraggableHOC>
    )}
  </Survey>
);

export default MainStage;
