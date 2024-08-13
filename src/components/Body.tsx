import Editor from "@monaco-editor/react";

function Body() {
  return (
    <div className="px-2 py-2 w-[90%] ">
      <Editor theme="vs-dark" height="30vh" width="100%" language="json" />
    </div>
  );
}
export default Body;
