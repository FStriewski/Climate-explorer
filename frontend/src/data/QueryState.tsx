import * as React from 'react';
import { ID, ICV, IPartialNode } from '../types';
import axios from 'axios';

interface IState {
  isoCountry: string;
  indicator: string;
  year: number;
}

interface IRenderProps {
  setQueryParam: (param) => void;
  unlockQuery: () => boolean;
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

  unlockQuery = () => {
    const { isoCountry, indicator, year } = this.state;
    
    return (isoCountry && indicator && year) ? false : true;
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
          unlockQuery: this.unlockQuery
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
