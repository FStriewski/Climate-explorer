import * as React from 'react';
const { useState } = React;

interface ICountryContext {
  iso: string;
  updateIso: (iso: string) => void;
}

const Ctx = React.createContext({} as ICountryContext);
export const CountryState = Ctx.Consumer;
const { Provider } = Ctx;

export const CountryStateProvider = props => {
  const [iso, setIso] = useState('NLD');

  const updateIso = (newIso: string) => setIso(newIso);

  return (
    <Provider
      value={{
        iso,
        updateIso
      }}
    >
      {props.children}
    </Provider>
  );
};
