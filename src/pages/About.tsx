import DuelSlider from "../components/DuelSlider";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <div className="container mx-auto py-10 text-center">
        <h3 className="text-2xl font-bold py-6">About</h3>
        <DuelSlider />
      </div>
    </div>
  );
};

export default About;
