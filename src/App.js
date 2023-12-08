import "./App.css";
import Time from "./components/Time.js";
import Date from "./components/date.js";
import Rate from "./components/rates.js";
import Prate from "./components/prate.js";
import Erate from "./components/erate.js";
import Crate from "./components/crate.js";
import Nrate from "./components/nrate.js";
function App() {
  return (
    <>
      <div className="App"></div>

      <div class="w-2/4 ring-2 ml-auto mr-auto mt-4 flex">
        <p class=" mr-auto flex items-center ml-2">
          Date: <Date />
        </p>

        <p class="ml-auto flex items-center mr-2">
          Time: <Time />
        </p>
      </div>
      <div class="w-2/4 ring-2 ml-auto mr-auto mt-4  ">
        <div className="flex items-center justify-between ml-auto mr-auto">
          <h1>CURRENCY</h1>
          <h1 className="mr-11">BUY</h1>
          <h1>SELL</h1>
        </div>
        <Rate />
        <Prate />
        <Erate />
        <Crate />
        <Nrate />
      </div>
    </>
  );
}

export default App;
