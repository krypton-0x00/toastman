declare module "@monaco-editor/react" {
  import * as monaco from "monaco-editor";

  export type MonacoEditorProps = {
    width?: string | number;
    height?: string | number;
    value?: string;
    defaultValue?: string;
    language?: string;
    theme?: string;
    options?: monaco.editor.IStandaloneEditorConstructionOptions;
    overrideServices?: monaco.editor.IEditorOverrideServices;
    editorDidMount?: (
      editor: monaco.editor.IStandaloneCodeEditor,
      monaco: typeof monaco
    ) => void;
    editorWillMount?: (monaco: typeof monaco) => void;
    onChange?: (
      value: string | undefined,
      event: monaco.editor.IModelContentChangedEvent
    ) => void;
  };

  export default function MonacoEditor(props: MonacoEditorProps): JSX.Element;
}
