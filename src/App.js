import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/ForumHomePage/ForumHomePage";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
