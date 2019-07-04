import * as React from 'react';
import Draggable from 'react-draggable';

interface IHandler {
  onStart: () => void;
  onStop: () => void;
}

interface IRenderProps {
  dragHandlers: IHandler;
  handleDrag: (e, ui) => void;
  deltaPosition: {x:number, y:number}
  setInitialPos: (x,y)=> void;
}

const Ctx = React.createContext({} as IRenderProps);

export const DragState = Ctx.Consumer;
const Provider = Ctx.Provider;

export class DraggableHOC extends React.Component {
         state = {
           activeDrags: 0,
           controlledPosition: {
             x: -400,
             y: 200
           },
           deltaPosition: {
             x: 0,
             y: 0
           }
         };

         eventLogger = (e: MouseEvent, data: any) => {
           console.log('Event: ', e);
           console.log('Data: ', data);
         };

         handleDrag = (e, ui) => {
           const { x, y } = this.state.deltaPosition;
           this.setState({
             deltaPosition: {
               x: x + ui.deltaX,
               y: y + ui.deltaY
             }
           });
           return { x, y };
         };

         onStart = () => {
           this.setState({ activeDrags: ++this.state.activeDrags });
         };

         onStop = () => {
           this.setState({ activeDrags: --this.state.activeDrags });
         };

         // For controlled component
         adjustXPos = e => {
           e.preventDefault();
           e.stopPropagation();
           const { x, y } = this.state.controlledPosition;
           this.setState({ controlledPosition: { x: x - 10, y } });
         };

         adjustYPos = e => {
           e.preventDefault();
           e.stopPropagation();
           const { controlledPosition } = this.state;
           const { x, y } = controlledPosition;
           this.setState({ controlledPosition: { x, y: y - 10 } });
         };

         onControlledDrag = (e, position) => {
           const { x, y } = position;
           this.setState({ controlledPosition: { x, y } });
         };

         onControlledDragStop = (e, position) => {
           this.onControlledDrag(e, position);
           this.onStop();
         };

         setInitialPos = (x, y) =>
           this.setState({ controlledPosition: { x, y } });

         render() {
           const { deltaPosition, controlledPosition } = this.state;
           const dragHandlers = {
             onStart: this.onStart,
             onStop: this.onStop
           };
           return (
             <Provider
               value={{
                 deltaPosition,
                 dragHandlers,
                 handleDrag: this.handleDrag,
                 setInitialPos: this.setInitialPos
               }}
             >
               {this.props.children}
             </Provider>
           );
         }
       }
