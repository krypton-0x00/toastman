import React from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";

function Body() {
  return (
    <div className="px-2 py-2 w-[90%] ">
      <Editor height="30vh" width="100%" defaultLanguage="json" />
    </div>
  );
}
export default Body;
