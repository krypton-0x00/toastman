interface RequestProps {
  method: string;
  url: string;
}

const Request = ({ method, url }: RequestProps) => {
  return (
    <div className="flex gap-4  font-poppins hover:bg-gray-700 cursor-pointer  w-full overflow-hidden px-5 py-1">
      <p className="text-green-600  ">{method}</p>
      <p>{url}</p>
    </div>
  );
};

export default Request;
