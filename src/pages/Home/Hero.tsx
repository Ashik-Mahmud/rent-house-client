import { useEffect, useState } from "react";
import { BiBook } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import ReactTyped from "react-typed";
import { useAppSelector } from "../../app/store";

type Props = {};
const Fade = require("react-reveal/Fade");
const Hero = (props: Props) => {
  const { name } = useAppSelector((state) => state.appOption);

  const location = useLocation();
  const navigate = useNavigate();
  const [category, setCategory] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [address, setAddress] = useState<string>("");
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

  /* Handle Navigate  */
  const handleNavigate = async () => {
    navigate("/houses", {
      state: {
        from: location,
        address,
        type,
        category,
      },
    });
  };
  return (
    <section
      className="hero  min-h-[85vh] sm:min-h-[73vh]"
      style={{
        backgroundImage: `url(${images[current]})`,
        clipPath: `ellipse(102% 100% at 48.96% 0%)`,
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content pb-44 pt-20 sm:pb-0">
        <div className="sm:px-40">
          <Fade top distance="20px">
            <h1 className="mb-5 text-4xl sm:text-5xl font-bold">
              Welcome To the <span className="text-success"> {name}</span>
            </h1>
            <p className="mb-5">
              <b className="text-success">{name}</b> one of the best platform to
              find your dream house in the best price and location in the
              Bangladesh. We have a huge collection of houses and apartments for
              sale and rent. You can choose your dream house from our huge
              collection of houses and apartments.
            </p>
            <p className="font-poppins uppercase font-bold">
              <ReactTyped
                strings={[
                  "Here you can find your",
                  "Dream house",
                  "Best Houses",
                  "Best Apartments",
                  "Best Locations",
                  "Best Price",
                  "Best Deal",
                  "Best Service",
                  "Best Platform",
                  "Best Place",
                  "Best Place to find your dream house",
                  "Best Place to find your dream apartment",
                ]}
                typeSpeed={40}
                loop
              />
            </p>
          </Fade>
          <Fade top distance="20px">
            <div className="filter-search sm:flex items-center font-poppins justify-center w-full">
              {/* address */}
              <div className="name border  rounded rounded-r-none p-3 relative mt-10 flex-1 bg-white">
                <div className="name-title absolute -top-4 bg-white text-black border rounded p-1">
                  <h3 className="text-xs font-poppins">Category</h3>
                </div>
                <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                  <div className="icon">
                    <BiBook />
                  </div>
                  <select
                    className="outline-none  w-full pl-4 cursor-pointer text-sm text-black"
                    onChange={(event) => setCategory(event.target.value)}
                  >
                    <option value="">select category</option>
                    <option value="General">General</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Duplex">Duplex</option>
                    <option value="Flat">Flat</option>
                    <option value="Terrace">Terrace</option>
                  </select>
                </div>
              </div>
              {/* End */}
              {/* address */}
              <div className="name border   p-3 relative mt-10 flex-1 bg-white">
                <div className="name-title absolute -top-4 bg-white text-black border rounded p-1">
                  <h3 className="text-xs font-poppins">Type</h3>
                </div>
                <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2  bg-white">
                  <div className="icon">
                    <BiBook />
                  </div>
                  <select
                    className="form-control outline-none pl-4 w-full text-black"
                    onChange={(event) => setType(event.target.value)}
                  >
                    <option value="">select type</option>
                    <option value="Rent">Rent</option>
                    <option value="Sale">Sale</option>
                  </select>
                </div>
              </div>
              <div className="name border  rounded rounded-r-none rounded-l-none p-3 relative mt-10 flex-1 bg-white">
                <div className="name-title absolute -top-4 bg-white text-black border rounded p-1">
                  <h3 className="text-xs font-poppins">Address</h3>
                </div>
                <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2 bg-white">
                  <div className="icon">
                    <BiBook />
                  </div>
                  <input
                    type="text"
                    onInput={(event) => setAddress(event.currentTarget.value)}
                    className="form-control outline-none pl-4 w-full text-black"
                    placeholder="Address"
                  />
                </div>
              </div>

              <div className="sm:flex items-start flex-col mt-10">
                <button
                  className="btn btn-primary mr-7 w-full sm:w-auto  h-[94px] rounded-l-none"
                  onClick={handleNavigate}
                >
                  Find Houses
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Hero;
