import SectionTitle from "../../../components/SectionTItle";
import WhyUsCard from "./WhyUsCard";

type Props = {};
const Fade = require("react-reveal/Fade");

const WhyUs = (props: Props) => {
  return (
    <section id="why-us" className="py-10">
      <div className="container mx-auto">
        <SectionTitle
          title="Why choose Us?"
          desc="We are already certified company for helping publics to sale/rent their houses. Publics always gave us positives feedback which one makes us so much inspired to development"
        />
        <Fade top distance="20px">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            <WhyUsCard />
            <WhyUsCard />
            <WhyUsCard />
            <WhyUsCard />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default WhyUs;
