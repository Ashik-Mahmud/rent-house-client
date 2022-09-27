import ReactTooltip from "react-tooltip";
type Props = {};

const CallToAction = (props: Props) => {
  return (
    <div
      className="mt-20 hero"
      style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpbfb-yOxLqRb_RLYHvlmHcF12BVnvAKw8QE7BfkD&s")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-4xl font-bold text-center my-4 text-white">
            Do you have a houses for sale or rent?
          </h1>
          <button className="btn btn-success mr-7">
            Create Account to List here
          </button>
        </div>
      </div>
      <ReactTooltip />
    </div>
  );
};

export default CallToAction;
