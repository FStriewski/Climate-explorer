import * as React from 'react';
import { ContentState, Editor, EditorState } from 'draft-js';

import { InactiveText } from '../../styles/Text';
import { ID, ITextElement } from '../../types';

type Props = ITextElement & {
  autoFocus?: boolean;
  content?: string;
  id: ID;
  selected: boolean;
};

interface IState {
  editorState: EditorState;
  editorParent: any;
}

export class TextElement extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty(), editorParent: null };
  }

  componentDidMount() {
    const textContent = ContentState.createFromText(this.props.content || '');

    this.setState({
      editorState: EditorState.createWithContent(textContent)
    });
  }

  setText = (id: ID, content: string) => null; // set text in document
  saveText = (id: ID, content: string) => null; // save text  to BE

  onChange = (
    editorState: EditorState,
    saveText: (id: ID, content: string) => void,
    content: string,
    id: ID
  ) => this.setState({ editorState }, () => saveText(id, content));

  /* tslint:disable: jsx-no-lambda */
  render() {
    return (
      <React.Fragment>
        {this.props.selected ? (
          <Editor
            editorState={this.state.editorState}
            onChange={editor => {
              const content = editor.getCurrentContent().getPlainText();
              if (content !== this.props.content) {
                this.setText(this.props.id, content);
              }
              this.onChange(editor, this.saveText, content, this.props.id);
            }}
            placeholder="Placeholder"
          />
        ) : (
          <InactiveText>
            {this.state.editorState.getCurrentContent().getPlainText()}
          </InactiveText>
        )}
      </React.Fragment>
    );
  }
}
