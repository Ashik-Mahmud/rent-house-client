import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

type Props = {};

const ScreenLoader = (props: Props) => {
  const [jokes, setJokes] = useState<any>([]);
  const getJokes = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    setJokes(data);
  };
  useEffect(() => {
    getJokes();
  }, []);
  return (
    <div className="grid place-items-center h-screen fixed z-50 left-0 top-0 w-screen bg-[#ffffff81] backdrop-blur-sm">
      <div className="text-center flex items-center justify-center flex-col gap-3">
        <HashLoader color="#36D399" loading={true} size={100} />
        <small className="text-xl block my-10">
          Maybe It will take while time. Hats off your patience 🙏
        </small>
        <div className="w-1/2 whitespace-pre-wrap shadow p-4 rounded">
          <h3 className="text-xl font-bold">
            Leave Your bore ness to these Jokes.
          </h3>
          <small className="text-lg block my-3">
            {jokes?.value || "loading...."}
          </small>
          <button onClick={getJokes} className="btn btn-primary">
            Get Jokes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScreenLoader;
