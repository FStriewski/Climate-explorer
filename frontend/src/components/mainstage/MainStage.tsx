import * as React from 'react';
import { IHeader, IParagraph, IPartialNode, Position } from 'src/types';

import { MainStage as StyledMainStage } from '../../styles/MainStage';

import { SingleLineChart } from 'src/test/LineChart';
import GridLayout from 'react-grid-layout';
import '../../styles/React-Grid.css';

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

      <StyledMainStage>
        <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
          <div key="b" data-grid={{ x: 1, y: 0, w: 4, h: 4 }}>
            <SingleLineChart data={test} />
          </div>
        </GridLayout>
      </StyledMainStage>
);

export default MainStage;
