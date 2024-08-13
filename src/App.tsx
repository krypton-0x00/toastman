import { RecoilRoot } from "recoil";
import History from "./components/History";
import Main from "./components/Main";

function App() {
  return (
    <RecoilRoot>
      <div className="  flex bg-gray-900 text-white w-screen h-screen">
        <History />
        <Main />
      </div>
    </RecoilRoot>
  );
}

export default App;
