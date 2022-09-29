import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import HouseDetails from "./pages/Houses/HouseDetails";
import Houses from "./pages/Houses/Houses";
import Reviews from "./pages/Reviews";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import NotFoundPage from "./shared/NotFoundPage";
function App() {
  return (
    <div className="App font-open font-medium bg-cover bg-center bg-[#F5F6FA]">
      <Header />
      <Routes>
        {/* Pages Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/houses" element={<Houses />} />
        {/* Single House Route */}
        <Route path="/house/:houseId" element={<HouseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Validation Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
