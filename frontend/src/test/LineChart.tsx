import * as React from 'react';

import { LineChart, AreaChart } from 'react-chartkick';
import 'chart.js';

export const SingleLineChart = ({ data }) => {
  console.log(data);
  return (
  <React.Fragment>
    <LineChart data={data} width="100%" height="100%" /><div>Chart label</div>
  </React.Fragment>);
};
