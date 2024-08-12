import Request from "./Request";

function HistoryTab() {
  return (
    <div className="flex flex-col w-full justify-center">
      <Request method="GET" url="http://localhost:3000/api" />
      <Request method="GET" url="http://localhost:3000/api" />
      <Request method="GET" url="http://localhost:3000/api" />
      <Request method="GET" url="http://localhost:3000/api" />
      <Request method="GET" url="http://localhost:3000/api" />
      <Request method="GET" url="http://localhost:3000/api" />
    </div>
  );
}

export default HistoryTab;
