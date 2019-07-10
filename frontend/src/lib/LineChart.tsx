import * as React from 'react';
import { LineChart, AreaChart } from 'react-chartkick';
import 'chart.js';
import { Indicator } from './types';

export const SingleLineChart = ({ data, color }) => {
  return (
    <AreaChart
      data={data}
      width="100%"
      colors={color === Indicator.TEMP ? ['#ff0000'] : ['#ADD8E6']}
      height="100%"
      xtitle="Time"
      ytitle="T. [*C] / P. [mm]"
      library={{ backgroundColor: '#fff' }}
    />
  );
};
