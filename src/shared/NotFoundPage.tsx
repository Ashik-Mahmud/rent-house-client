import { Link } from "react-router-dom";

type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <div className="grid place-items-center py-10">
      <img
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg"
        alt=""
      />

      <Link to="/" className="btn btn-lg btn-primary mb-10">
        GO Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
