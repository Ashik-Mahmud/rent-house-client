import { Link, Outlet, useLocation } from "react-router-dom";

type Props = {};

const MyReviews = (props: Props) => {
  const { pathname } = useLocation();
  return (
    <div>
      <div className="p-4 my-5 bg-white">
        <div className="title flex items-center justify-between">
          <h3 className="text-2xl font-bold">My Reviews</h3>
          <div className="flex items-center rounded overflow-hidden">
            <Link
              className={`p-3 font-poppins rounded-none ${
                pathname.includes("my-reviews") ? "bg-success" : "bg-base-300"
              } `}
              to="/dashboard/reviews/my-reviews"
            >
              Reviews
            </Link>
            <Link
              className={`p-3 font-poppins rounded-none ${
                pathname.includes("add-review") ? "bg-success" : "bg-base-300"
              } `}
              to="/dashboard/reviews/add-review"
            >
              Add Review
            </Link>
          </div>
        </div>
        <div className="review-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
