import { Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import Contact from "./pages/Contact";
import AddBlog from "./pages/Dashboard/AddBlog/AddBlog";
import AddHouse from "./pages/Dashboard/AddHouse/AddHouse";
import AdminHouses from "./pages/Dashboard/AdminHouses/AdminHouses";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardContent from "./pages/Dashboard/Dashboard/DashboardContent";
import Messages from "./pages/Dashboard/Messages/Messages";
import MyBlogs from "./pages/Dashboard/MyBlogs/MyBlogs";
import MyBookings from "./pages/Dashboard/MyBookings/MyBookings";
import HouseQuestions from "./pages/Dashboard/MyHouses/HouseQuestions/HouseQuestions";
import HouseReviews from "./pages/Dashboard/MyHouses/HouseReviews/HouseReviews";
import MyHouses from "./pages/Dashboard/MyHouses/MyHouses";
import ReportedHouses from "./pages/Dashboard/MyHouses/ReportedHouses/ReportedHouses";
import UpdateHouse from "./pages/Dashboard/MyHouses/UpdateHouse";
import AddReview from "./pages/Dashboard/MyReviews/AddReview";
import MyReviews from "./pages/Dashboard/MyReviews/MyReviews";
import UserReviews from "./pages/Dashboard/MyReviews/UserReviews";
import Payments from "./pages/Dashboard/Payments/Payments";
import Profile from "./pages/Dashboard/Profile/Profile";
import PurchaseHouse from "./pages/Dashboard/PurchaseHouse/PurchaseHouse";
import Settings from "./pages/Dashboard/Settings/Settings";
import Users from "./pages/Dashboard/Users/Users";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Houses/Blogs/Blogs";
import HouseDetails from "./pages/Houses/HouseDetails/HouseDetails";
import Houses from "./pages/Houses/Houses";
import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import NotFoundPage from "./shared/NotFoundPage";

function App() {
  const location = useLocation();
  return (
    <div className="App font-open font-medium bg-cover bg-center bg-[#F5F6FA]">
      {!location.pathname.includes("dashboard") && <Header />}
      <Routes>
        {/* Pages Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        MyBlogs
        <Route path="/houses" element={<Houses />} />
        {/* Single House Route */}
        <Route path="/house/:houseId" element={<HouseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardContent />} />

          {/* Users Routes */}
          <Route path="houses" element={<MyHouses />} />
          <Route path="houses/add" element={<AddHouse />} />
          <Route path="bookings" element={<MyBookings />} />
          <Route path="houses/edit/:houseId" element={<UpdateHouse />} />
          <Route path="houses/reviews/:houseId" element={<HouseReviews />} />
          <Route
            path="houses/questions/:houseId"
            element={<HouseQuestions />}
          />
          <Route path="houses/reports/:houseId" element={<ReportedHouses />} />

          {/* Common Routes */}
          <Route path="reviews" element={<MyReviews />}>
            <Route path="add-review" element={<AddReview />} />
            <Route path="my-reviews" element={<UserReviews />} />
            <Route index element={<UserReviews />} />
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />

          {/* Customers Routes */}
          <Route path="payments" element={<Payments />} />
          <Route path="purchase/bookings" element={<PurchaseHouse />} />

          {/* Admin Routes */}
          <Route path="messages" element={<Messages />} />
          <Route path="users" element={<Users />} />
          <Route path="blogs" element={<MyBlogs />} />
          <Route path="blogs/add" element={<AddBlog />} />
          <Route path="admin/houses" element={<AdminHouses />} />
        </Route>
        {/* Validation Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {!location.pathname.includes("dashboard") && <Footer />}
    </div>
  );
}

export default App;
