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
          className="flex-1 bg-[#1E1E1E] active:bg-orange-600 cursor-pointer focus:bg-red-600  px-2 py-2"
        >
          Headers
        </button>
        <div className="border-r border-zinc-600"></div>
        <button
          onClick={() => setRequestOption("body")}
          className="bg-[#1E1E1E] flex-1 active:bg-orange-600 cursor-pointer focus:bg-orange-600  px-2 py-2"
        >
          Body
        </button>
      </div>
      {requestOption === "header" ? <Headers /> : <Body />}
    </div>
  );
};

export default HttpOptions;
