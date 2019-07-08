import * as React from 'react';

import { MainStage as StyledMainStage } from '../../styles/MainStage';
import { Chart} from '../../styles/Chart';
import QueryState from '../../data/QueryState';
import { SingleLineChart } from 'src/lib/LineChart';
import GridLayout from 'react-grid-layout';
import '../../styles/React-Grid.css';

const MainStage = () => (
  <QueryState>
    {({ state }) => (
      <StyledMainStage>
        <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
          {state.charts.length &&
            state.charts.map(record => (
              <Chart key={record.id} data-grid={{ x: 1, y: 0, w: 4, h: 6 }}>
                  <SingleLineChart data={record.data} />
                  <p>{record.description}</p>
              </Chart>
            ))}
        </GridLayout>
      </StyledMainStage>
    )}
  </QueryState>
);

export default MainStage;
