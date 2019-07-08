import * as React from 'react';
import { LineChart } from 'react-chartkick';
import 'chart.js';

export const SingleLineChart = ({ data }) => {
  return <LineChart data={data} width="100%" height="100%" />;
};
