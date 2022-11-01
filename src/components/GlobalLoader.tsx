import { ScaleLoader } from "react-spinners";

type Props = {};

const GlobalLoader = (props: Props) => {
  return (
    <div className="text-center py-20">
      <ScaleLoader color={"#2EC867"} />
    </div>
  );
};

export default GlobalLoader;
