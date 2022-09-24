import Button from "../../components/Button";

type Props = {};

const Home = (props: Props) => {
  return (
    <section>
      <div className="text-center py-10">
        <h3 className="text-4xl font-poppins font-bold">Welcome to HOME</h3>
        <Button>Get Started</Button>
      </div>
    </section>
  );
};

export default Home;
