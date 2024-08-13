const ApiRequestPart = () => {
  return (
    <div className="px-2 py-2 flex flex-col  gap-7 w-[90%]">
      <input
        className="text-xl bg-transparent  focus:outline-none w-[90%] text-white px-2  font-poppins"
        value="untitled"
      />
      <div className="flex">
        <select className="text-black rounded-l-sm px-4 py-1 focus:outline-none bg-slate-300 ">
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
        <input
          className="px-4 rounded-r-sm py-1 text-black focus:outline-none w-[90%] bg-slate-300"
          type="search"
          placeholder="http://example.com/api/"
        />
        <button className="text-sm font-normal active:scale-95 bg-red-600 px-4 py-2 rounded-sm">
          Send
        </button>
      </div>
    </div>
  );
};

export default ApiRequestPart;
