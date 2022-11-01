import { ScaleLoader } from "react-spinners";

type Props = {};

const HomeLoader = (props: Props) => {
  return (
    <div className="text-center h-screen w-screen grid place-items-center">
      <div>
        <ScaleLoader color={"#2EC867"} />
      </div>
    </div>
  );
};

export default HomeLoader;
