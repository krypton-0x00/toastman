import ResponseOptions from "./ResponseOptions";
import { useRecoilValue } from "recoil";
import { responseOption } from "../store/atoms/responseOptions";
import ResponseHeaders from "./ResponseHeaders";
import ResponseBody from "./ResponseBody";

function Response() {
  const currentResponseOption: string = useRecoilValue(responseOption);
  return (
    <div className="flex flex-col gap-4">
      <ResponseOptions />
      <div className="flex gap-7 py-3 px-2  border-y border-zinc-600">
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

      {currentResponseOption === "body" ? (
        <ResponseBody />
      ) : (
        <ResponseHeaders />
      )}
    </div>
  );
}
export default Response;
