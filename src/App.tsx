import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Houses from "./pages/Houses/Houses";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import NotFoundPage from "./shared/NotFoundPage";
function App() {
  return (
    <div className="App font-open font-medium">
      <Header />
      <Routes>
        {/* Pages Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/houses" element={<Houses />} />

        {/* Validation Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
