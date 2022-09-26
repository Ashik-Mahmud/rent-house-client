import BestHouses from "./BestHouse/BestHouses";
import CallToAction from "./CallToAction";
import Hero from "./Hero";

type Props = {};

const Home = (props: Props) => {
  return (
    <section>
      <Hero />
      <BestHouses />
      <CallToAction />
    </section>
  );
};

export default Home;
