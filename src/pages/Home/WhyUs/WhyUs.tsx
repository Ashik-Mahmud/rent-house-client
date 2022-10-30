import { BiFilter, BiHome, BiMoney, BiUserCheck } from "react-icons/bi";
import SectionTitle from "../../../components/SectionTItle";
import WhyUsCard from "./WhyUsCard";

type Props = {};
const Fade = require("react-reveal/Fade");

const whyUseJson = [
  {
    title: "Authentic Houses",
    icon: <BiHome />,
    desc: "We will provide all the authenticate houses with advanced filtering and comment system for verify users and also you can report any houses without login",
  },
  {
    title: "Advanced Filtering",
    icon: <BiFilter />,
    desc: "We will provide all the authenticate houses with advanced filtering and comment system for verify users and also you can report any houses without login",
  },
  {
    title: "SSLCOMMERZ & Stripe Payment Method",
    icon: <BiMoney />,
    desc: "We will provide all the authenticate houses with advanced filtering and comment system for verify users and also you can report any houses without login",
  },
  {
    title: "Advanced Users Verification ",
    icon: <BiUserCheck />,
    desc: "We will provide all the authenticate houses with advanced filtering and comment system for verify users and also you can report any houses without login",
  },
];

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
            {whyUseJson?.map((data: any, ind: number) => (
              <WhyUsCard
                key={ind}
                desc={data?.desc}
                icon={data?.icon}
                title={data?.title}
              />
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default WhyUs;
