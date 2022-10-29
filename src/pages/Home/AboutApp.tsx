import { useState } from "react";
import { BsPlay } from "react-icons/bs";
import ModalVideo from "react-modal-video";
type Props = {};
const Fade = require("react-reveal/Fade");

const AboutApp = (props: Props) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  return (
    <div className="bg-white mt-5">
      <ModalVideo
        channel="youtube"
        isOpen={isModal}
        videoId="8LUuLRwCjWg"
        onClose={() => setIsModal(false)}
      />
      <div className="container mx-auto px-10 sm:px-0">
        <div className="sm:flex items-center justify-evenly py-10">
          <Fade left distance="20px">
            <div className="sm:max-w-2xl">
              <h3 className="text-xl">Yah! That's all</h3>
              <h2 className="text-4xl font-bold my-3">About Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                alias odit cum, quidem molestiae saepe culpa nam quae labore et
                molestias consequuntur fugiat, modi dolorem amet minima ea, quo
                est.
              </p>
              <div className="my-4 flex items-center gap-5">
                <button className="btn btn-md btn-info btn-outline">
                  See More
                </button>
                <button className="btn btn-md btn-info">Contact Us</button>
              </div>
            </div>
          </Fade>
          <Fade right distance="20px">
            <div className="py-10 grid place-items-center sm:max-w-2xl">
              <img
                src="https://cdn.pixabay.com/photo/2019/12/16/23/06/search-4700433_960_720.jpg"
                alt=""
                className="rounded-xl"
              />
              <button
                onClick={() => setIsModal((state) => !state)}
                className="absolute z-30 p-5 text-4xl grid place-items-center bg-white rounded-full"
              >
                <BsPlay />
              </button>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
