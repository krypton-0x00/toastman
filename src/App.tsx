import { RecoilRoot } from "recoil";
import History from "./components/History";
import Main from "./components/Main";

function App() {
  return (
    <RecoilRoot>
      <div className="flex  text-white w-screen">
        <History />
        <Main />
      </div>
    </RecoilRoot>
  );
}

export default App;
