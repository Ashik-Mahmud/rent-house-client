import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Route, Routes, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import { useAppDispatch } from "./app/store";
import AuthChangeRoute from "./auth/AuthChangeRoute";
import RequireAdmin from "./auth/RequireAdmin";
import RequireAuth from "./auth/RequireAuth";
import RequireBlog from "./auth/RequireBlog";
import RequireCustomer from "./auth/RequireCustomer";
import RequireSupAdmin from "./auth/RequireSupAdmin";
import RequireUser from "./auth/RequireUser";
import { base_backend_url } from "./configs/config";
import { setAppOptions } from "./features/AppSlice";
import About from "./pages/About";
import Reviews from "./pages/AppReviews/Reviews";
import Login from "./pages/Authentication/Login";
import RegisterAuth from "./pages/Authentication/Register";
import ResetPassword from "./pages/Authentication/ResetPassword";
import ResetPasswordField from "./pages/Authentication/ResetPasswordField";
import Blogs from "./pages/Blogs/Blogs";
import BlogsDetails from "./pages/Blogs/BlogsDetails";
import Contact from "./pages/Contact";
import AddHouse from "./pages/Dashboard/AddHouse/AddHouse";
import AdminHouses from "./pages/Dashboard/AdminHouses/AdminHouses";
import ApprovedHouses from "./pages/Dashboard/AdminHouses/ApprovedHouses/ApprovedHouses";
import RejectedHouses from "./pages/Dashboard/AdminHouses/RejectedHouses/RejectedHouses";
import UnapprovedHouses from "./pages/Dashboard/AdminHouses/UnapprovedHouses/UnapprovedHouses";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminDashboard from "./pages/Dashboard/Dashboard/AdminDashboard/AdminDashboard";
import CustomerDashboard from "./pages/Dashboard/Dashboard/CustomerDashboard/CustomerDashboard";
import HouseHolderDashboard from "./pages/Dashboard/Dashboard/HouseHolderDashboard/HouseHolderDashboard";
import ManagerDashboard from "./pages/Dashboard/Dashboard/ManagerDashboard/ManagerDashboard";
import FeatureRequest from "./pages/Dashboard/FeatureRequest/FeatureRequest";
import Messages from "./pages/Dashboard/Messages/Messages";
import AddBlog from "./pages/Dashboard/MyBlogs/AddBlog/AddBlog";
import UpdateBlogs from "./pages/Dashboard/MyBlogs/AddBlog/UpdateBlogs";
import MyBlogs from "./pages/Dashboard/MyBlogs/MyBlogs";
import UsersBlogs from "./pages/Dashboard/MyBlogs/UsersBlogs";
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
import ForBlogsRequest from "./pages/Dashboard/RequestFromUsers/ForBlogsRequest";
import ForHouseHolderRequest from "./pages/Dashboard/RequestFromUsers/ForHouseHolderRequest";
import RequestFromUsers from "./pages/Dashboard/RequestFromUsers/RequestFromUsers";
import Settings from "./pages/Dashboard/Settings/Settings";
import Users from "./pages/Dashboard/Users/Users";
import Home from "./pages/Home/Home";
import HouseDetails from "./pages/Houses/HouseDetails/HouseDetails";
import Houses from "./pages/Houses/Houses";
import Pricing from "./pages/Pricing";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import NotFoundPage from "./shared/NotFoundPage";

type Props = {};
const App = (props: Props) => {
  /* States for House Action */

  const dispatch = useAppDispatch();
  const location = useLocation();
  const cookies = new Cookies();
  const user = cookies.get("user");
  /* Get House Option*/
  const { data, isLoading, refetch } = useQuery("appOptions", async () => {
    const res = await axios.get(`${base_backend_url}/api/v1/admin/app-options`);
    return res?.data;
  });
  const { data: newData } = useQuery(["userInit", user], async () => {
    if (user) {
      const res = await axios.get(
        `${base_backend_url}/api/v1/users/me/${user?.user?._id}`,
        {
          headers: {
            authorization: `Bearer ${user?.token}`,
          },
        }
      );
      return res?.data?.data;
    }
  });
  const updatedUser = newData;

  useEffect(() => {
    if (isLoading) return;
    if (data) {
      dispatch(setAppOptions(data?.app));
      refetch();
    }
  }, [data, dispatch, isLoading, refetch]);

  const sendDashboardForParticularRole = () => {
    if (updatedUser?.role === "admin") {
      return <AdminDashboard />;
    } else if (updatedUser?.role === "user") {
      return <HouseHolderDashboard />;
    } else if (updatedUser?.role === "manager") {
      return <ManagerDashboard />;
    } else if (updatedUser?.role === "customer") {
      return <CustomerDashboard />;
    }
  };

  return (
    <div className="App font-open font-medium bg-cover bg-center bg-slate-50">
      {!location.pathname.includes("dashboard") && <Header />}
      <Routes>
        {/* Pages Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        MyBlogs
        <Route path="/houses" element={<Houses />} />
        {/* Single House Route */}
        <Route path="/house/:houseId" element={<HouseDetails />} />
        <Route
          path="/login"
          element={
            <AuthChangeRoute>
              <Login />
            </AuthChangeRoute>
          }
        />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/new-password/:verified"
          element={<ResetPasswordField />}
        />
        <Route
          path="/register"
          element={
            <AuthChangeRoute>
              <RegisterAuth />
            </AuthChangeRoute>
          }
        />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blogId" element={<BlogsDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* 
           Dashboard Routes 
        */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={sendDashboardForParticularRole()} />

          {/* Users Routes */}
          <Route
            path="houses"
            element={
              <RequireUser>
                <MyHouses />
              </RequireUser>
            }
          />
          <Route
            path="houses/add"
            element={
              <RequireUser>
                <AddHouse />
              </RequireUser>
            }
          />

          <Route
            path="houses/edit/:houseId"
            element={
              <RequireUser>
                <UpdateHouse />
              </RequireUser>
            }
          />
          <Route
            path="houses/reviews/:houseId"
            element={
              <RequireUser>
                <HouseReviews />
              </RequireUser>
            }
          />
          <Route
            path="houses/questions/:houseId"
            element={
              <RequireUser>
                <HouseQuestions />
              </RequireUser>
            }
          />
          <Route
            path="houses/reports/:houseId"
            element={
              <RequireUser>
                <ReportedHouses />
              </RequireUser>
            }
          />
          <Route
            path="payments"
            element={
              <RequireUser>
                <Payments />
              </RequireUser>
            }
          />

          {/* Common Routes */}
          <Route path="reviews" element={<MyReviews />}>
            <Route path="add-review" element={<AddReview />} />
            <Route path="my-reviews" element={<UserReviews />} />
            <Route index element={<UserReviews />} />
          </Route>
          <Route
            path="/dashboard/feature-request"
            element={<FeatureRequest />}
          />
          <Route path="profile" element={<Profile />} />
          <Route
            path="settings"
            element={<Settings appChangeRefetch={refetch} />}
          />

          {/* Customers Routes */}
          <Route
            path="purchase/bookings"
            element={
              <RequireCustomer>
                <PurchaseHouse />
              </RequireCustomer>
            }
          />
          <Route
            path="bookings"
            element={
              <RequireCustomer>
                <MyBookings />
              </RequireCustomer>
            }
          />

          {/* Admin Routes */}
          <Route
            path="messages"
            element={
              <RequireAdmin>
                <Messages />
              </RequireAdmin>
            }
          />
          <Route
            path="users"
            element={
              <RequireSupAdmin>
                <Users />
              </RequireSupAdmin>
            }
          />
          <Route
            path="blogs"
            element={
              <RequireBlog>
                <MyBlogs />
              </RequireBlog>
            }
          >
            <Route index element={<UsersBlogs />} />
            <Route path="users-blogs" element={<UsersBlogs />} />
            <Route path="update/:id" element={<UpdateBlogs />} />
            <Route path="add" element={<AddBlog />} />
          </Route>
          <Route
            path="request-from-users"
            element={
              <RequireAdmin>
                <RequestFromUsers />
              </RequireAdmin>
            }
          >
            <Route
              path="for-house-holder"
              element={<ForHouseHolderRequest />}
            />
            <Route path="for-blogs" element={<ForBlogsRequest />} />
            <Route index element={<ForBlogsRequest />} />
          </Route>

          <Route
            path="request-from-users/for-house-holder"
            element={
              <RequireAdmin>
                <ForHouseHolderRequest />
              </RequireAdmin>
            }
          />

          <Route
            path="admin/houses"
            element={
              <RequireAdmin>
                <AdminHouses />
              </RequireAdmin>
            }
          >
            <Route index element={<UnapprovedHouses />} />
            <Route path="approved" element={<ApprovedHouses />} />
            <Route path="unapproved" element={<UnapprovedHouses />} />
            <Route path="rejected" element={<RejectedHouses />} />
          </Route>
        </Route>
        {/* Validation Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {!location.pathname.includes("dashboard") && <Footer />}
    </div>
  );
};

export default App;
