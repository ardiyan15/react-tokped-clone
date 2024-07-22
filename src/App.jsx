import { useState } from "react";

import Home from "./pages/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Home />
      <button className="btn btn-primary">Test</button>
    </div>
  );
}

export default App;
