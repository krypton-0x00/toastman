function ResponseHeaders() {
  const resposeHeaders = [
    { name: "Content-Type", value: "application/json" },
    { name: "Content-Length", value: "13.6kb" },
    { name: "Connection", value: "keep-alive" },
    { name: "Server", value: "gunicorn/20.1.0" },
    { name: "Access-Control-Allow-Origin", value: "*" },
    { name: "X-Frame-Options", value: "SAMEORIGIN" },
  ];

  return (
    <div className="px-2 py-2 w-[90%] flex flex-col gap-4 ">
      <h1 className="text-xl font-poppins px-2">Response Headers</h1>
      <table className="w-full border">
        <thead>
          <tr className="border">
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Value</th>
          </tr>
        </thead>
        <tbody>
          {resposeHeaders.map((item) => (
            <tr>
              <td className="border px-2 py-1">{item.name}</td>
              <td className="border px-2 py-1">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResponseHeaders;
