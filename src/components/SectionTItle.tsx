type Props = {
  title: string;
  desc: string;
};

const Fade = require("react-reveal/Fade");

const SectionTitle = ({ title, desc }: Props) => {
  return (
    <Fade top distance="20px">
      <div className="flex flex-col items-center justify-center py-20 px-10 sm:px-96">
        <h1 className="text-4xl font-bold text-center my-4">{title}</h1>
        <p className="text-center">{desc}</p>
        <div className="flex items-center gap-2">
          <hr className="w-16 h-1 bg-primary rounded " />
          <span className="text-xl font-poppins text-primary">+</span>
          <hr className="w-16 h-1 bg-primary rounded" />
        </div>
      </div>
    </Fade>
  );
};

export default SectionTitle;
