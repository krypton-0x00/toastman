import React from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";
import ResponseOptions from "./ResponseOptions";

function Response() {
  return (
    <div className="flex flex-col gap-4">
      <ResponseOptions />
      <div className="flex gap-7 px-2">
        <p>
          Status: <span className="text-green-600">200</span>
        </p>
        <p>
          Time <span className="text-green-600">300ms</span>
        </p>
        <p>
          Size <span className="text-green-600">13.6kb</span>
        </p>
      </div>
      <div className="px-2 py-2 w-[90%] ">
        <Editor height="30vh" width="100%" defaultLanguage="json" />
      </div>
    </div>
  );
}
export default Response;
