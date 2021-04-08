import logo from "./logo.svg";
import Carousel from "./Carousel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Carousel</h1>
      <Carousel delay={1000} children={[1, 2, "3", 4, <span>sss</span>]} />
    </div>
  );
}

export default App;
