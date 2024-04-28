import { Routes, Route } from "react-router-dom";
import Home from "./pages/ForumHomePage/ForumHomePage";
import Header from "./components/Header/Header";
import BadURL from "./components/BadURL/BadURL";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<BadURL />} />
      </Routes>
    </>
  );
}

export default App;
