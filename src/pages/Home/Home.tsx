import BestHouses from "./BestHouse/BestHouses";
import CallToAction from "./CallToAction";
import CreateAccountSec from "./CreateAccountSec";
import Hero from "./Hero";
import PublicReviews from "./PublicReviews/PublicReviews";
import Statistic from "./Statistic";
import WhyUs from "./WhyUs/WhyUs";

type Props = {};

const Home = (props: Props) => {
  return (
    <section>
      <Hero />
      <Statistic />
      <BestHouses />
      <WhyUs />
      <PublicReviews />
      <CreateAccountSec />
      <CallToAction />
    </section>
  );
};

export default Home;
