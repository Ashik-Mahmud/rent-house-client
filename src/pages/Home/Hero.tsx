import { useEffect, useState } from "react";

type Props = {};

const Hero = (props: Props) => {
  /* Create Image Slider */
  let images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWw_fKQ6H8mfIq0v-fvyUiJL0osaQODoC2og&usqp=CAU",
    "https://i.pinimg.com/originals/66/d9/f5/66d9f5afdc5337d3f9eac362b970c426.jpg",
    "https://www.bhg.com/thmb/SLX8yV-ipXwrrPqUgkeAalYr8zU=/1707x1280/smart/filters:no_upscale():focal(899x639:901x641)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
  ];
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [current, length]);

  return (
    <section
      className="hero min-h-[60vh]"
      style={{
        backgroundImage: `url(${images[current]})`,
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="px-60">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome To the <span className="text-success"> hasHouse?</span>
          </h1>
          <p className="mb-5">
            <b className="text-success">hasHouse?</b> one of the best platform
            to find your dream house in the best price and location in the
            Bangladesh. We have a huge collection of houses and apartments for
            sale and rent. You can choose your dream house from our huge
            collection of houses and apartments.
          </p>
          <button className="btn btn-primary mr-7">Find Houses</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
