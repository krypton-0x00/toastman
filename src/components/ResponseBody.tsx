import Editor from "@monaco-editor/react";

function ResponseBody() {
  return (
    <div className="px-2 py-2 w-[90%] ">
      <Editor height="30vh" width="100%" language="json" />
    </div>
  );
}

export default ResponseBody;
