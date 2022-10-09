import { ScaleLoader } from "react-spinners";

type Props = {};

const GlobalLoader = (props: Props) => {
  return (
    <div className="text-center py-20">
      <ScaleLoader color={"#80CED1"} />
    </div>
  );
};

export default GlobalLoader;
