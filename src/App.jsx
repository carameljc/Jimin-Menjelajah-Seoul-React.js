import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/index";
import Start from "./components/Start";
import Explore from "./components/Explore";
import Loading from "./components/Loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<index />} />
        <Route path="/start" element={<Start />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
