import { Link, Outlet } from "react-router-dom";

type Props = {};

const MyBlogs = (props: Props) => {
  return (
    <div>
      <div className="p-5 my-5 bg-white">
        <div className="title flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">
              <span className="text-success">Ashik Mahmud's</span> Blogs
            </h3>
          </div>
          <div className="flex items-center rounded overflow-hidden">
            <Link
              className="bg-success py-2 px-4"
              to="/dashboard/blogs/users-blogs"
            >
              Blogs
            </Link>
            <Link className="bg-base-300 py-2 px-4" to="/dashboard/blogs/add">
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
