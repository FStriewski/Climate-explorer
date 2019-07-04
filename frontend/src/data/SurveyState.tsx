import * as React from 'react';
import { ID, ICV, IPartialNode } from '../types';
import axios from 'axios';

interface IState {
  id: string;
  nodes: IPartialNode[];
  xnodes: string;
}

interface IRenderProps {
  nodes: IPartialNode[];
  updatePosition: (id, pos) => void;
}

interface IProps {
  json: ICV;
}

const baseUrl = 'http://localhost:4000';

/* tslint:disable-next-line:no-object-literal-type-assertion */
const { Consumer, Provider } = React.createContext({} as IRenderProps);
export default Consumer;

export class SurveyState extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      id: null,
      nodes: [],
      xnodes: ''
    };
  }

  destructureNodes = (json: ICV) => {
    if (json.nodes) {
      return json.nodes.map(node =>
        (({ id, x, y, col }) => ({ id, x, y, col }))(node)
      );
    }
    return [];
  };

  componentDidMount() {
    axios.get(`${baseUrl}/test`).then(res => {
      const xnodes = res.data;
      this.setState({ xnodes });
    });

    const nodes = this.destructureNodes(this.props.json);
    this.setState({
      nodes
    });

    console.log(this.state)
  }

  updateNodePosition = (id: ID, position) => {
    const { x, y } = position;
    this.setState({
      ...this.state,
      nodes: this.state.nodes.map(node => {
        if (node.id === id) {
          return {
            ...node,
            x,
            y
          };
        }
        return node;
      })
    });
  };

  render() {
    console.log(this.state);
    return (
      <Provider
        value={{
          nodes: this.state.nodes,
          updatePosition: this.updateNodePosition
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
