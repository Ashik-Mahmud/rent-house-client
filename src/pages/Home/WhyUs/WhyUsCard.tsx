type Props = {
  title: string;
  icon: any;
  desc: string;
};
const WhyUsCard = ({ title, icon, desc }: Props) => {
  return (
    <div className="bg-base-100 shadow m-3 p-6 rounded ">
      <div className="icon text-5xl w-20 h-20  grid place-items-center -mt-16 mb-5 rounded bg-success text-white">
        {icon}
      </div>
      <div className="info">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500 font-poppins my-2">{desc}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;
