import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [count, _setCount] = useState(0);
  const countRef = useRef(count);
  const setCount = (value) => {
    countRef.current = value;
    _setCount(value);
  };

  const incHandler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    window.addEventListener("dblclick", () => {
      alert("count: " + countRef.current);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <button onClick={incHandler}>증가</button>
      </header>
    </div>
  );
}

export default App;
