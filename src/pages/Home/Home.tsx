import BestHouses from "./BestHouse/BestHouses";
import CallToAction from "./CallToAction";
import Hero from "./Hero";
import PublicReviews from "./PublicReviews/PublicReviews";

type Props = {};

const Home = (props: Props) => {
  return (
    <section>
      <Hero />
      <BestHouses />
      <PublicReviews />
      <CallToAction />
    </section>
  );
};

export default Home;
