import { BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTItle";

type Props = {};

const BestHouses = (props: Props) => {
  return (
    <div>
      <div className="container mx-auto">
        <SectionTitle
          title="Top 4 Best Houses"
          desc=" We have a huge collection of houses and apartments for sale and rent.
        You can choose your dream house from our huge collection of houses and
        apartments."
        />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* card */}
          <div className="shadow p-5 rounded cursor-pointer">
            <img
              className="rounded object-cover w-full mb-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWw_fKQ6H8mfIq0v-fvyUiJL0osaQODoC2og&usqp=CAU"
              alt=""
            />
            <div className="title">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">This is product title</h3>
                <span className="bg-gray-200 p-1 rounded-md text-xs">
                  brand
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-green-500">100 $</span>
                <span className="text-xs text-sky-400">available</span>
              </div>
            </div>
            <div className="info">
              <span className="category">Duplex</span>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, est.
              </p>
              <Link to={`/products/`}>
                <span className="p-2 rounded bg-sky-100 mt-4 px-4 flex items-center justify-between">
                  {" "}
                  View Details
                  <span title="Best Ratings">
                    <BiStar />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestHouses;
