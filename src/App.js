import React, { useState } from "react";
import "./App.css";
import Pages from "./pages/pages";
import Form from "./pages/form";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Form status={status} setStatus={setStatus} />
        <Pages
          filtered={filtered}
          setFiltered={setFiltered}
          status={status}
          setStatus={setStatus}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
