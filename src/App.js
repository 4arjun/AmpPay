import "./App.css";
import Dashboard from "./components/Dashboard.js";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
