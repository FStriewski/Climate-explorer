import * as React from 'react';

import { LineChart, AreaChart } from 'react-chartkick';
import 'chart.js';

export const SingleLineChart = ({ data }) => {
  console.log(data);
  return <LineChart data={data} width="800px" height="400px" />;
};
