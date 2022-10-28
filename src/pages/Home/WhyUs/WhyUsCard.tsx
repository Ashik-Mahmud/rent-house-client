import { AiOutlineRadarChart } from "react-icons/ai";
type Props = {};
const WhyUsCard = (props: Props) => {
  return (
    <div className="bg-base-100 shadow m-3 p-6 rounded ">
      <div className="icon text-5xl w-20 h-20  grid place-items-center -mt-16 mb-5 rounded bg-success text-white">
        <AiOutlineRadarChart />
      </div>
      <div className="info">
        <h3 className="text-xl font-bold">Valid House</h3>
        <p className="text-sm text-gray-500 font-poppins my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quidem
          illo amet blanditiis adipisci rerum quasi quis? Esse quidem sint
          dolorem magni suscipit iure sapiente porro accusamus, beatae ad!
          Repudiandae?
        </p>
      </div>
    </div>
  );
};

export default WhyUsCard;
