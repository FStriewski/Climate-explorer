import * as React from 'react';
import axios from 'axios';

interface IState {
  isoCountry: string;
  indicator: string;
  year: number;
}

type RequestParams = {
  indicator: string;
  country: string;
};

type RequestParamsYear = {
  year: string;
} & RequestParams;

type RequestParamsMonth = {
  month: string;
} & RequestParams;

interface IRenderProps {
  setQueryParam: (param) => void;
  lockedQuery: () => boolean;
  getYear: ({ indicator, country, year }: RequestParamsYear) => void;
  getMonthTimeSeries: ({
    indicator,
    country,
    month
  }: RequestParamsMonth) => void;
  getTimeSeries: ({ indicator, country }: RequestParams) => void;
}

const baseUrl = 'http://localhost:4000';

/* tslint:disable-next-line:no-object-literal-type-assertion */
const { Consumer, Provider } = React.createContext({} as IRenderProps);
export default Consumer;

export class QueryStateProvider extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isoCountry: null,
      indicator: null,
      year: null
    };
  }

  getYear = ({ indicator, country, year }: RequestParamsYear) => {
    if (this.lockedQuery) {
      return;
    }
    axios.get(`${baseUrl}/temp/${indicator}/${country}/${year}/`);
  };

  getMonthTimeSeries = ({ indicator, country, month }) => {
    if (this.lockedQuery) {
      return;
    }
    axios.get(
      `${baseUrl}/getMonthTimeSeries/${indicator}/${country}/${month}/`
    );
  };

  getTimeSeries = ({ indicator, country }: RequestParams) => {
    if (this.lockedQuery) {
      return;
    }
    axios.get(`${baseUrl}/timeSeries/${indicator}/${country}/`);
  };

  lockedQuery = () => {
    const { isoCountry, indicator, year } = this.state;

    return isoCountry && indicator && year ? false : true;
  };

  // needs definition
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
      default:
        return this.state;
    }
  };

  render() {
    console.log(this.state);
    return (
      <Provider
        value={{
          setQueryParam: this.setQueryParam,
          lockedQuery: this.lockedQuery,
          getYear: this.getYear,
          getMonthTimeSeries: this.getMonthTimeSeries,
          getTimeSeries: this.getTimeSeries
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
