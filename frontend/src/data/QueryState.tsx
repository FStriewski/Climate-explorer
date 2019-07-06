import * as React from 'react';
import { ID, ICV, IPartialNode } from '../types';
import axios from 'axios';

interface IState {
  iso: string;
  ind: string;
  year: number;
}

interface IRenderProps {
  setQueryParam: (param) => void;
}

const baseUrl = 'http://localhost:4000';

/* tslint:disable-next-line:no-object-literal-type-assertion */
const { Consumer, Provider } = React.createContext({} as IRenderProps);
export default Consumer;

export class QueryStateProvider extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      iso: '',
      ind: '',
      year: 0
    };
  }

  setQueryParam = (param ) =>
    this.setState({
      ...this.state,
      param
    });

  render() {
    console.log(this.state);
    return (
      <Provider
        value={{
          setQueryParam: this.setQueryParam
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
