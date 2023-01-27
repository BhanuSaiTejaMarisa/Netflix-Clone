import "./App.css";
import Banner from "./components/banner/banner";
import Row from "./components/row/Row";
import { requests } from "./services/requests";

function App() {
  return (
    <div className="App">
      <Banner/>
      {Object.values(requests).map((request, index) => (
        <Row {...request} key={index} isPoster={index === 0} />
      ))}
    </div>
  );
}

export default App;
