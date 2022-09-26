type Props = {};

const CallToAction = (props: Props) => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-4xl font-bold text-center my-4">
            Do you have a houses for sale or rent?
          </h1>
          <button className="btn btn-success mr-7">
            Create Account to List here
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
