import HistoryTab from "./HistoryTab";

const History = () => {
  return (
    <div className="border-r border-zinc-600 w-80">
      <div className="text-xl font-bold flex justify-between px-2 py-2 items-center">
        <p className="font-poppins">HISTORY</p>
        <button className="text-sm font-normal bg-red-600 px-4 py-2 rounded-sm">
          New
        </button>
      </div>
      <div className="flex justify-center">
        <input
          className="w-72 bg-gray-700 placeholder:text-white placeholder:text-sm font-poppins text-black focus:outline-none rounded-sm px-2 py-1"
          type="search"
          placeholder="Search"
        />
      </div>

      <HistoryTab />
    </div>
  );
};

export default History;
