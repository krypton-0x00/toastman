import { useState } from "react";

const Headers = () => {
  const [data, setData] = useState([{ id: 0, key: "", value: "" }]);

  const handleAddRow = () => {
    setData((prev) => [...prev, { id: prev.length, key: "", value: "" }]);
  };

  const handleDeleteRow = () => {
    setData((prev) => prev.slice(0, -1));
  };

  return (
    <div className="flex justify-center flex-col gap-5 px-2 ">
      <div className="font-poppins text-xl font-bold">Headers</div>
      <table className="border border-zinc-600 w-[90%]">
        <tr className="border border-zinc-600">
          <th className="border">Key</th>
          <th className="border">Value</th>
        </tr>

        {data.map((item) => {
          return (
            <>
              <tr className="border border-zinc-600"></tr>
              <td className="border">
                <input
                  onChange={(e) => {
                    item.key = e.target.value;
                  }}
                  type="text"
                  placeholder="key"
                  value={item.key}
                  className="bg-transparent text-white placeholder:text-zinc-500 px-2 overflow-hidden focus:outline-none"
                />
              </td>
              <td className="border ">
                <input
                  onChange={(e) => {
                    item.value = e.target.value;
                  }}
                  type="text"
                  value={item.value}
                  placeholder="value"
                  className="bg-transparent  text-white placeholder:text-zinc-500 px-2 overflow-hidden focus:outline-none"
                />
              </td>
            </>
          );
        })}
      </table>
      <div className="flex gap-5">
        <button
          className="bg-blue-600 px-4 py-2 rounded-sm w-24 active:scale-95 "
          onClick={handleAddRow}
        >
          Add
        </button>
        <button
          onClick={handleDeleteRow}
          className="bg-red-600 px-4 py-2 rounded-sm w-24 active:scale-95"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Headers;
