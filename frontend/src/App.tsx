import * as React from 'react';
import Header from './components/Header';
import MainStage from './components/mainstage/MainStage';
import SideBar from './components/sidebar/SideBar';
import { QueryStateProvider } from './data/QueryState';
import { App as StyledApp } from './styles/App';
import './styles/index';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

class App extends React.Component {

  printDocument = () => {
    const input = document.getElementById('print');
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save('download.pdf');
    });
  }
  
  public render() {
    return (
      <QueryStateProvider>
        <StyledApp>
          <Header print={this.printDocument} />
          <SideBar />
          <MainStage />
        </StyledApp>
      </QueryStateProvider>
    );
  }
}

export default App;
