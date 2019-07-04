import * as React from 'react';
const { useState } = React;
import { ID, ITextElement, Mode } from '../types';

interface IRenderProps {
  mode: Mode;
  updateMode: (mode: Mode) => void;
}

/* tslint:disable-next-line:no-object-literal-type-assertion */
const { Consumer, Provider } = React.createContext({} as IRenderProps);
export default Consumer;

export const ModeState = (props) => {
  const [mode, setMode] = useState(Mode.EDIT);

  const updateMode = (newMode: Mode) => {
    setMode(newMode);
  };

  return (
    <Provider
      value={{
        mode,
        updateMode,
      }}
    >
      {props.children}
    </Provider>
  );
};
