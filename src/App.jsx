import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import "./index.css";
import Appstore from "./utils/Appstore";

function App() {


  return (
    <div className="App">
    <Provider store={Appstore}>
    <Body/>
    </Provider>
    </div>
  );
}

export default App;
