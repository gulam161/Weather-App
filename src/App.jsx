import { useState } from "react";
import "./App.css";

import Temp from "./components/Temp";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Temp />
    </>
  );
}

export default App;
