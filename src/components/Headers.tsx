import { useState } from "react";

const Headers = () => {
  const [data, setData] = useState([{ id: 0, key: "", value: "" }]);

  const handleAddRow = () => {
    setData((prev) => [...prev, { id: prev.length, key: "", value: "" }]);
  };

  const handleDeleteRow = () => {
    setData((prev) => prev.slice(0, -1));
  };

  const handleInputChange = (id: number, field: string, value: string) => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className="flex justify-center flex-col gap-5 px-2">
      <table className="border border-zinc-600 w-[90%]">
        <thead>
          <tr className="border border-zinc-600">
            <th className="border">Key</th>
            <th className="border">Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border border-zinc-600">
              <td className="border">
                <input
                  onChange={(e) =>
                    handleInputChange(item.id, "key", e.target.value)
                  }
                  type="text"
                  placeholder="key"
                  value={item.key}
                  className="bg-transparent text-white placeholder:text-zinc-500 px-2 overflow-hidden focus:outline-none"
                />
              </td>
              <td className="border">
                <input
                  onChange={(e) =>
                    handleInputChange(item.id, "value", e.target.value)
                  }
                  type="text"
                  placeholder="value"
                  value={item.value}
                  className="bg-transparent text-white placeholder:text-zinc-500 px-2 overflow-hidden focus:outline-none"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-5">
        <button
          className="bg-blue-600 px-4 py-2 rounded-sm w-24 active:scale-95"
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
