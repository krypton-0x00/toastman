import { useRecoilState } from "recoil";
import { responseOption } from "../store/atoms/responseOptions";

function ResponseOptions() {
  const [responseOptions, setResponseOptions] = useRecoilState(responseOption);

  return (
    <div className="">
      <div className="flex   px-2">
        <button
          onClick={() => setResponseOptions("body")}
          className="bg-slate-800 active:bg-slate-500 cursor-pointer focus:bg-slate-400  px-2 py-2"
        >
          Body
        </button>
        <button
          onClick={() => setResponseOptions("Header")}
          className="bg-slate-800 active:bg-slate-500 cursor-pointer focus:bg-slate-400  px-2 py-2"
        >
          Header
        </button>
      </div>
    </div>
  );
}

export default ResponseOptions;
