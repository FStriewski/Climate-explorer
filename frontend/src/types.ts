export type ID = string;

export enum Position {
  LEFT,
  RIGHT
}

export enum Mode {
  DRAG,
  EDIT
}

export interface IDimensions {
  x: number;
  y: number;
}

export interface ITextStyle {
  color?: string;
  fontFamily?: string;
  fontSize?: number;
}

export interface ITextElement  {
  id: ID;
  height: number;
  width: number;
  left: number;
  top: number;
  content: string;
  style: ITextStyle;
  name: string;
}

export interface IParagraph extends ITextElement {
  parentId: ID,
}

export interface IHeader {
  firstName: string;
  secondName: string;
  phone: string;
  email: string;
}

export interface INode extends IDimensions {
  id: ID;
  col: Position;
  paragraphs: ITextElement[];
}

export interface IPartialNode {
  id: string;
  x: number;
  y: number;
  col: Position;
}

export interface ICV {
  id: ID;
  header: IHeader;
  nodes: INode[];
}
