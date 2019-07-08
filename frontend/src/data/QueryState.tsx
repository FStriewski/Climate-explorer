import * as React from 'react';
import { Chart, IState } from '../lib/types';

interface IRenderProps {
  setQueryParam: (param) => void;
  lockedQuery: () => boolean;
  tool: 'Year' | 'MonthTS' | 'FullTS';
  setTool: (tool: string) => void;
  charts: Chart[];
  addRecord: (data: any) => void;
  flushState: () => void;
  state: IState;
}

const data = {
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

const fakeChart = {
  id: '123',
  data,
  description: 'Fakechart'
}

/* tslint:disable-next-line:no-object-literal-type-assertion */
const { Consumer, Provider } = React.createContext({} as IRenderProps);
export default Consumer;

export class QueryStateProvider extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isoCountry: null,
      indicator: null,
      year: null,
      month: null,
      tool: null,
      charts: [fakeChart]
    };
  }

  lockedQuery = () => {
    const { isoCountry, indicator } = this.state;

    return isoCountry && indicator ? false : true;
  };

  setTool = mode => this.setState({ tool: mode });

  flushState = () => {
    this.setState({
      tool: null,
      isoCountry: null,
      indicator: null,
      year: null,
      month: null
    });
  }

  addRecord = (chart: Chart) =>
    this.setState({
      ...this.state,
      charts: this.state.charts.concat(chart)
    }, () => this.flushState());

  setQueryParam = param => {
    switch (param.type) {
      case 'indicator':
        return this.setState({
          ...this.state,
          indicator: param.payload
        });
      case 'isoCountry':
        return this.setState({
          ...this.state,
          isoCountry: param.payload
        });
      case 'year':
        return this.setState({
          ...this.state,
          year: param.payload
        });
      case 'month':
        return this.setState({
          ...this.state,
          month: param.payload
        });
      default:
        return this.state;
    }
  };

  render() {
    console.log(this.state.charts);
    return (
      <Provider
        value={{
          state: this.state,
          setQueryParam: this.setQueryParam,
          lockedQuery: this.lockedQuery,
          tool: this.state.tool,
          setTool: this.setTool,
          charts: this.state.charts,
          addRecord: this.addRecord,
          flushState: this.flushState,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
