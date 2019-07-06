import * as React from 'react';
import Header from './components/Header';
import MainStage from './components/mainstage/MainStage';
import SideBar from './components/sidebar/SideBar';
import { QueryStateProvider } from './data/QueryState';
import { App as StyledApp } from './styles/App';
import './styles/index';

class App extends React.Component {
  public render() {
    return (
      <QueryStateProvider>
          <StyledApp>
            <Header />
            <SideBar />
            <MainStage />
          </StyledApp>
      </QueryStateProvider>
    );
  }
}

export default App;
