import ApiRequestPart from "./ApiRequestPart";
import HttpOptions from "./HttpOptions";
import Response from "./Response";

const Main = () => {
  return (
    <div className="  w-full flex flex-col gap-4">
      <ApiRequestPart />
      <HttpOptions />
      <hr className="border-zinc-600" />
      <Response />
    </div>
  );
};

export default Main;
