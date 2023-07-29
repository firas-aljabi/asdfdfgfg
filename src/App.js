import "./App.css";
import PreLoader from "./components/preloader/PreLoader";
import Routers from "./routers/Routers";

function App() {
  return (
    <>
      <PreLoader />
      <div className="App bg-[#2D2727]">
        <Routers />
      </div>
    </>
  );
}

export default App;
