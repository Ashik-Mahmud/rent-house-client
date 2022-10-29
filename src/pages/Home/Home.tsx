import { ScrollToTop } from "react-simple-scroll-up";
import useTitle from "../../hooks/useTitle";
import AboutApp from "./AboutApp";
import BestHouses from "./BestHouse/BestHouses";
import CallToAction from "./CallToAction";
import CreateAccountSec from "./CreateAccountSec";
import Hero from "./Hero";
import PublicReviews from "./PublicReviews/PublicReviews";
import Statistic from "./Statistic";
import WhyUs from "./WhyUs/WhyUs";
type Props = {};

const Home = (props: Props) => {
  useTitle("Home");
  return (
    <section className="overflow-x-hidden sm:overflow-x-auto">
      <Hero />
      <Statistic />
      <BestHouses />
      <WhyUs />
      <AboutApp />
      <PublicReviews />
      <CreateAccountSec />
      <CallToAction />
      <ScrollToTop
        size={60}
        className="z-50"
        strokeFillColor="#36D399"
        bgColor="#fff"
        symbolSize={30}
        symbolColor="#36D399"
      />
    </section>
  );
};

export default Home;
