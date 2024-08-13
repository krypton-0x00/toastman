import { useRecoilState } from "recoil";
import Headers from "./Headers";
import { requestOptions } from "../store/atoms/requestOptions";
import Body from "./Body";

const HttpOptions = () => {
  const [requestOption, setRequestOption] = useRecoilState(requestOptions);

  return (
    <div className="">
      <div className="flex   px-2">
        <button
          onClick={() => setRequestOption("header")}
          className="bg-slate-800 active:bg-slate-500 cursor-pointer focus:bg-slate-400  px-2 py-2"
        >
          Headers
        </button>
        <button
          onClick={() => setRequestOption("body")}
          className="bg-slate-800 active:bg-slate-500 cursor-pointer focus:bg-slate-400  px-2 py-2"
        >
          Body
        </button>
      </div>
      {requestOption === "header" ? <Headers /> : <Body />}
    </div>
  );
};

export default HttpOptions;
