import { useSetRecoilState } from "recoil";
import { responseOption } from "../store/atoms/responseOptions";

function ResponseOptions() {
  const setResponseOptions = useSetRecoilState(responseOption);

  return (
    <div className="">
      <div className="flex  px-2">
        <button
          onClick={() => setResponseOptions("body")}
          className="bg-[#1E1E1E] flex-1 active:bg-orange-600 cursor-pointer focus:bg-orange-600  px-2 py-2"
        >
          Body
        </button>
        <div className="border-r border-zinc-600"></div>
        <button
          onClick={() => setResponseOptions("Header")}
          className="bg-[#1E1E1E] flex-1 active:bg-slate-500 cursor-pointer focus:bg-slate-400  px-2 py-2"
        >
          Header
        </button>
      </div>
    </div>
  );
}

export default ResponseOptions;
