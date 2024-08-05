import { useState } from "react";

import Home from "./pages/home";

import './styles/main.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Home />
    </div>
  );
}

export default App;
