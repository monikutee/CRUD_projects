import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components";
import { AddEdit } from "./components";
import { Display } from "./components";
import { ContextProvider } from "./contextStore";

function App() {
  return (
    <ContextProvider initialProjects={[]}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<AddEdit />} />
          <Route path="edit" element={<AddEdit />} />
          <Route path="display" element={<Display />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
