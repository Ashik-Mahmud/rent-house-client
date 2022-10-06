import { Link, Outlet, useLocation } from "react-router-dom";

type Props = {};

const MyBlogs = (props: Props) => {
  const location = useLocation();
  return (
    <div>
      <div className="p-4 sm:p-5 my-5 bg-white">
        <div className="title sm:flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">
              <span className="text-success">Ashik Mahmud's</span> Blogs
            </h3>
          </div>
          <div className="sm:flex mt-3 sm:mt-0 items-center rounded overflow-hidden">
            <Link
              className={`py-2 px-4 ${
                location.pathname.includes("users-blogs") ||
                location.pathname === "/dashboard/blogs"
                  ? "bg-success"
                  : "bg-base-300"
              }`}
              to="/dashboard/blogs/users-blogs"
            >
              Blogs
            </Link>
            <Link
              className={` py-2 px-4 ${
                location.pathname.includes("blogs/add")
                  ? "bg-success"
                  : "bg-base-300"
              }`}
              to="/dashboard/blogs/add"
            >
              Add Blog
            </Link>
          </div>
        </div>
        <div className="blogs-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MyBlogs;
