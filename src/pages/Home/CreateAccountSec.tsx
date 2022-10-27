import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
type Props = {};

const Fade = require("react-reveal/Fade");

const CreateAccountSec = (props: Props) => {
  return (
    <div
      className="mt-20 hero bg-fixed"
      style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpbfb-yOxLqRb_RLYHvlmHcF12BVnvAKw8QE7BfkD&s")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <Fade top distance="20px">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center py-20 px-3">
            <h1 className="text-4xl font-bold text-center my-4 text-white">
              Do you have a houses for sale or rent?
            </h1>
            <Link to="/register" className="btn btn-success mr-7">
              Create Account to List here
            </Link>
          </div>
        </div>
      </Fade>
      <ReactTooltip />
    </div>
  );
};

export default CreateAccountSec;
