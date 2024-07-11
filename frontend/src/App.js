import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/intro/Intro";
import Main from "./pages/main/Main";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
