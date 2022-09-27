import BestHouses from "./BestHouse/BestHouses";
import CallToAction from "./CallToAction";
import Hero from "./Hero";
import PublicReviews from "./PublicReviews/PublicReviews";
import WhyUs from "./WhyUs/WhyUs";

type Props = {};

const Home = (props: Props) => {
  return (
    <section>
      <Hero />
      <BestHouses />
      <WhyUs />
      <PublicReviews />
      <CallToAction />
    </section>
  );
};

export default Home;
